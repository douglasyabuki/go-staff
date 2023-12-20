import Tooltip from '@/components/tooltip/Tooltip';
import { RectResult, getRect } from '@/utils/get-rect';
import { useRef, useState } from 'react';

export interface MockTableCellProps {
  fieldValue: any;
}

export default function MockTableCell({ fieldValue }: MockTableCellProps) {
  const [targetRect, setTargetRect] = useState<RectResult | null>(null);
  const cellRef = useRef(null);

  const onMouseOverHandler = () => {
    if (cellRef.current) {
      const rect = getRect(cellRef.current);
      setTargetRect(rect);
    }
  };

  return (
    <td onMouseEnter={onMouseOverHandler} onMouseLeave={() => setTargetRect(null)} ref={cellRef}>
      {fieldValue}
      {targetRect !== null && (
        <Tooltip targetRect={targetRect} translateX={16} translateY={8}>
          <div className="z-50 flex items-center justify-center rounded-md bg-white p-2 shadow-sm shadow-transparent-black">
            Hue hue hue
          </div>
        </Tooltip>
      )}
    </td>
  );
}
