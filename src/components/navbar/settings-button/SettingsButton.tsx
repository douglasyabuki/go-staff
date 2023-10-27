import { FilledSettingIcon, OutlinedSettingIcon } from '@/utils/Icons';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Settings from '../settings/Settings';

export default function SettingsButton() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <button
        className="relative flex h-[18px] w-[18px] items-center justify-center"
        onClick={() => setToggle(!toggle)}
      >
        <div className={`${toggle ? `opacity-0` : ``} absolute transition-opacity duration-200`}>
          <OutlinedSettingIcon></OutlinedSettingIcon>
        </div>
        <div
          className={`${
            toggle ? `animate-spin` : `opacity-0`
          } absolute transition-opacity duration-200`}
        >
          <FilledSettingIcon></FilledSettingIcon>
        </div>
      </button>
      {toggle && createPortal(<Settings />, document.getElementById('portal-root')!)}
    </>
  );
}
