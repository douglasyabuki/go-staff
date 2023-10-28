import Logo from '../logo/Logo';
import SettingsButton from './settings-button/SettingsButton';
import SidebarButton from './sidebar-button/SidebarButton';

export default function Navbar() {
  return (
    <div className="relative z-40 flex h-14 w-screen items-center justify-between bg-dark-blue-80 px-4 shadow-sm shadow-transparent-black dark:bg-gocn-grey-primary">
      <div className="flex items-center gap-4">
        <SidebarButton />
        <Logo />
      </div>
      <SettingsButton />
    </div>
  );
}
