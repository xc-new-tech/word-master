/**
 * 环境配置工具
 * 用于获取当前环境的正确 URL 配置
 */

/**
 * 获取当前应用的完整 base URL
 * 自动适配本地开发和生产环境
 */
export function getBaseUrl(): string {
  // 如果环境变量中配置了自定义 URL，使用它
  const customUrl = import.meta.env.VITE_APP_URL;
  if (customUrl) {
    return customUrl;
  }

  // 否则根据当前 window.location 自动生成
  const { protocol, host } = window.location;
  const basePath = import.meta.env.BASE_URL || '/';

  return `${protocol}//${host}${basePath}`;
}

/**
 * 获取认证重定向 URL
 * 用于 Supabase 登录后的回调
 */
export function getAuthRedirectUrl(): string {
  const baseUrl = getBaseUrl();
  // 确保 URL 以 / 结尾
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
}
