import { useLayoutEffect, useState } from 'react';

export interface DropdownProps {
  buttonRef: React.MutableRefObject<null>;
  children: React.ReactNode;
  spaceX: number;
  spaceY: number;
  toggle: boolean;
  zIndex: number;
  onClose: () => void;
}

interface Coordinates {
  top: number;
  left: number;
}

interface RectResult {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
}

const initialCoordinates: Coordinates = {
  top: 0,
  left: 0,
};

enum DirectionKeys {
  'ArrowDown',
  'ArrowUp',
  'PageDown',
  'PageUp',
}

export default function Dropdown({
  buttonRef,
  children,
  spaceX,
  spaceY,
  toggle,
  zIndex,
  onClose,
}: DropdownProps) {
  const [coordinates, setCoordinates] = useState<Coordinates>(initialCoordinates);

  useLayoutEffect(() => {
    if (buttonRef.current) {
      let top = 0;
      let left = 0;
      const rect = getRect(buttonRef.current);
      if (rect) {
        top = rect.top + rect.height + spaceY;
        left = rect.left + rect.width / 2 + spaceX;
        setCoordinates({ top, left });
      }
    }
  }, [buttonRef, zIndex, spaceX, spaceY]);

  const getRect = (element: HTMLElement | null): RectResult | null => {
    if (!element) return null;
    return element.getBoundingClientRect();
  };

  let isMouseDown = false;

  window.addEventListener('mousedown', (event) => {
    if (event.target === document.documentElement) {
      isMouseDown = true;
    }
  });

  window.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  window.addEventListener('scroll', () => {
    if (toggle === true && isMouseDown === true) {
      onClose();
    }
  });

  window.addEventListener('keydown', ({ key }) => {
    if (key in DirectionKeys && toggle === true) {
      onClose();
    }
  });

  const styleDictionary = {
    zBackground: zIndex ? `${zIndex}` : 50,
    zChild: zIndex ? `${zIndex + 1}` : 50,
    topChild: coordinates.top ? `${coordinates.top}px` : 0,
    leftChild: coordinates.left ? `${coordinates.left}px` : 0,
  };

  return (
    <>
      <div
        className={`${styleDictionary.zBackground} absolute top-0 h-screen w-screen bg-opacity-0`}
        onClick={onClose}
      ></div>
      <div
        style={{
          top: styleDictionary.topChild,
          left: styleDictionary.leftChild,
          zIndex: styleDictionary.zChild,
        }}
        className={`absolute h-fit w-fit`}
      >
        {children}
      </div>
    </>
  );
}
