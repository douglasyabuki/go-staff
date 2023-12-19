import Tooltip from '@/components/tooltip/Tooltip';
import { RectResult, getRect } from '@/utils/get-rect';
import { useRef, useState } from 'react';

export interface MockTableCellProps {
  fieldValue: string | number;
  fieldHeader: string;
}

interface RenderDictionary {
  name: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  imc: string;
  classification: string;
  obesityDegree: string;
}

export default function MockFormulatedTableCell({ fieldHeader, fieldValue }: MockTableCellProps) {
  const [targetRect, setTargetRect] = useState<RectResult | null>(null);
  const cellRef = useRef(null);

  const onMouseOverHandler = () => {
    if (cellRef.current) {
      const rect = getRect(cellRef.current);
      setTargetRect(rect);
    }
  };

  const renderDictionary: RenderDictionary = {
    name: "Interviewee's name",
    age: "Interviewee's age",
    gender: "Interviewee's gender",
    height: "Interviewee's height",
    weight: "Interviewee's weight",
    imc: 'weight(kg)/height(m)²',
    classification: 'Tabled classification measured by imc',
    obesityDegree: 'Tabled obesity degree measured by imc',
  };

  return (
    <td
      onMouseEnter={onMouseOverHandler}
      onMouseLeave={() => setTargetRect(null)}
      ref={cellRef}
      className="w-auto min-w-[88px] hover:font-bold"
    >
      {fieldValue}
      {targetRect !== null && (
        <Tooltip targetRect={targetRect} translateX={-88} translateY={8}>
          <div className="z-50 flex h-20 w-44 items-center justify-center rounded-md bg-white p-2 shadow-sm shadow-transparent-black">
            {renderDictionary[fieldHeader as keyof RenderDictionary]}
          </div>
        </Tooltip>
      )}
    </td>
  );
}
