import { XIcon } from '@/utils/Icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
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
        } absolute top-0 z-[42] flex h-screen w-[400px] transform-gpu flex-col bg-dark-blue-80 shadow-md shadow-transparent-black duration-200 ease-in-out dark:bg-gocn-grey-primary`}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="hover:animate-pulse">
            <XIcon></XIcon>
          </button>
        </div>
      </div>
    </>
  );
}
