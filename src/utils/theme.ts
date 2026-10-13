export type Theme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'compiladores_theme';

export const ThemeManager = {
  getTheme(): Theme {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    return 'dark';
  },

  setTheme(theme: Theme): void {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {}
    this.applyTheme(theme);
  },

  applyTheme(theme: Theme): void {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  },

  toggleTheme(): Theme {
    const next: Theme = this.getTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
    return next;
  },
};
