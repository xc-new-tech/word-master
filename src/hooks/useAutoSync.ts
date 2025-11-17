import { useEffect, useRef } from 'react';
import { useAppStore } from '@/store';

// 自动同步间隔（5分钟）
const SYNC_INTERVAL = 5 * 60 * 1000;

/**
 * 自动同步Hook
 * - 每隔5分钟自动同步数据到云端
 * - 页面可见性变化时同步（从后台切回前台时）
 * - 页面卸载时同步（关闭页面或刷新时）
 */
export function useAutoSync() {
  const { currentUser, syncToCloud, syncStatus } = useAppStore();
  const syncIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastSyncRef = useRef<number>(0);

  useEffect(() => {
    if (!currentUser) {
      // 未登录，清除定时器
      if (syncIntervalRef.current) {
        clearInterval(syncIntervalRef.current);
        syncIntervalRef.current = null;
      }
      return;
    }

    // 设置定期同步
    syncIntervalRef.current = setInterval(() => {
      if (syncStatus !== 'syncing') {
        console.log('定期自动同步数据...');
        syncToCloud();
        lastSyncRef.current = Date.now();
      }
    }, SYNC_INTERVAL);

    // 页面可见性变化时同步
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && currentUser) {
        const timeSinceLastSync = Date.now() - lastSyncRef.current;
        // 如果距离上次同步超过2分钟，则同步
        if (timeSinceLastSync > 2 * 60 * 1000 && syncStatus !== 'syncing') {
          console.log('页面可见，同步数据...');
          syncToCloud();
          lastSyncRef.current = Date.now();
        }
      }
    };

    // 页面卸载前同步
    const handleBeforeUnload = () => {
      if (currentUser && syncStatus !== 'syncing') {
        // 使用sendBeacon进行异步同步，不阻塞页面关闭
        console.log('页面卸载，同步数据...');
        syncToCloud();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      if (syncIntervalRef.current) {
        clearInterval(syncIntervalRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentUser, syncToCloud, syncStatus]);
}
