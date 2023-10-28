import ThemeSwitcher from './theme-switcher/ThemeSwitcher';

export default function Settings() {
  return (
    <div className="flex h-44 w-44 flex-col items-start justify-start gap-3 rounded-md bg-white px-2 py-3 shadow-md shadow-transparent-black dark:bg-grey-80 dark:text-white">
      <p className="font-semibold">Switch Theme</p>
      <ThemeSwitcher />
    </div>
  );
}
