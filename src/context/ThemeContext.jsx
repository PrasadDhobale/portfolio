import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [accentColor, setAccentColor] = useState('#3b82f6');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedColor = localStorage.getItem('accentColor') || '#3b82f6';
    setTheme(savedTheme);
    setAccentColor(savedColor);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    document.documentElement.style.setProperty('--color-primary', savedColor);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const changeAccentColor = (color) => {
    setAccentColor(color);
    localStorage.setItem('accentColor', color);
    document.documentElement.style.setProperty('--color-primary', color);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentColor, changeAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
