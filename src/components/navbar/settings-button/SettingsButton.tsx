import { FilledSettingIcon, OutlinedSettingIcon } from '@/utils/Icons';
import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import Settings from '../settings/Settings';
import Dropdown from '@/components/dropdown/Dropdown';

export default function SettingsButton() {
  const [toggle, setToggle] = useState<boolean>(false);
  const buttonRef = useRef(null);

  return (
    <>
      <button
        className="relative flex h-[18px] w-[18px] items-center justify-center"
        onClick={() => setToggle(!toggle)}
        ref={buttonRef}
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
      {toggle &&
        createPortal(
          <Dropdown
            toggle={toggle}
            zIndex={50}
            onClose={() => setToggle(false)}
            buttonRef={buttonRef}
            spaceY={20}
            spaceX={-158}
          >
            <Settings />
          </Dropdown>,
          document.getElementById('root')!,
        )}
    </>
  );
}
