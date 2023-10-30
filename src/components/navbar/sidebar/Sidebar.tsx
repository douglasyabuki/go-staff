import { AuthContext } from '@/contexts/AuthContext';
import { ExitIcon, XIcon } from '@/utils/Icons';
import { useContext } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <div
        className={`${
          isOpen ? `flex` : `hidden`
        } absolute top-0 z-[41] h-screen w-screen bg-opacity-0`}
        onClick={onClose}
      ></div>
      <div
        className={`${
          isOpen ? `translate-x-0` : `-translate-x-[400px]`
        } absolute top-0 z-[42] flex h-screen w-[400px] transform-gpu flex-col divide-y-[0.5px] divide-grey-20 bg-dark-blue-80 shadow-md shadow-transparent-black duration-200 ease-in-out dark:bg-gocn-grey-primary`}
      >
        <div className="flex h-[15%] items-start justify-end p-4">
          <button onClick={onClose} className="hover:animate-pulse">
            <XIcon></XIcon>
          </button>
        </div>
        <div className="h-[75%]"></div>
        <div className="flex h-[10%] items-center justify-end p-4">
          <button
            onClick={signOut}
            className="group flex items-center gap-2 font-semibold text-grey-20 transition-colors duration-200 hover:text-white"
          >
            <ExitIcon />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
