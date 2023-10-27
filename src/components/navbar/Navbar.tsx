import { useState } from 'react';
import { createPortal } from 'react-dom';
import { MenuIcon } from '@/utils/Icons';
import NavbarMenu from './navbar-menu/NavbarMenu';

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <div className="relative z-40 flex h-14 w-screen items-center justify-between bg-dark-blue-80 px-4 shadow-sm shadow-transparent-black">
        <button
          className="flex h-auto w-auto items-center justify-center"
          onClick={() => setToggle(!toggle)}
        >
          <MenuIcon />
        </button>
      </div>
      {createPortal(
        <NavbarMenu toggle={toggle} onClose={() => setToggle(false)}></NavbarMenu>,
        document.getElementById('portal-root')!,
      )}
    </>
  );
}
