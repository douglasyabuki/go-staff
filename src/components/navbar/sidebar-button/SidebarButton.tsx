import { MenuIcon } from '@/utils/Icons';
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { createPortal } from 'react-dom';

export default function SidebarButton() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <button
        className="flex h-auto w-auto items-center justify-center"
        onClick={() => setToggle(!toggle)}
      >
        <MenuIcon />
      </button>
      {createPortal(
        <Sidebar isOpen={toggle} onClose={() => setToggle(false)}></Sidebar>,
        document.getElementById('root')!,
      )}
    </>
  );
}
