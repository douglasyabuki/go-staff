import { RectResult, getRect } from '@/utils/get-rect';
import { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './tooltip-container/TooltipContainer';

export interface TooltipProps {
  children: React.ReactNode;
  targetRect: RectResult;
}

export default function Tooltip({ targetRect, children }: TooltipProps) {
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = getRect(ref.current);
      setTooltipHeight(rect!.height);
    }
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (tooltipY < 0) {
      tooltipY = targetRect.bottom;
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.getElementById('portal-root')!,
  );
}
