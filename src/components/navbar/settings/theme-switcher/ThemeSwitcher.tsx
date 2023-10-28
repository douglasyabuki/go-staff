import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { MoonIcon, SunIcon } from '@/utils/Icons';

export default function ThemeSwitcher() {
  const { darkMode, handleThemeSwitch } = useContext(ThemeContext);
  return (
    <div
      className="relative flex h-4 w-12 items-center place-self-center rounded-full bg-grey-70 shadow-inner shadow-transparent-black"
      onClick={handleThemeSwitch}
    >
      <div
        className={`${
          darkMode ? `translate-x-full` : `translate-x-0`
        } absolute flex h-6 w-6 transform-gpu items-center justify-center rounded-full bg-white shadow-sm shadow-transparent-black duration-200 dark:bg-gocn-grey-primary`}
      >
        {darkMode ? <MoonIcon /> : <SunIcon />}
      </div>
    </div>
  );
}
