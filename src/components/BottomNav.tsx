import { useNavigate, useLocation } from 'react-router-dom';

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: '/', icon: 'home', label: '首页' },
    { path: '/vocabulary', icon: 'menu_book', label: '词库' },
    { path: '/dictation', icon: 'headphones', label: '听写' },
    { path: '/profile', icon: 'person', label: '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-md flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-subtext-light dark:text-subtext-dark hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              <span className="text-xs mt-1 font-chinese">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
