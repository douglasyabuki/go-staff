import { RectResult, getRect } from '@/utils/get-rect';
import { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './tooltip-container/TooltipContainer';

export interface TooltipProps {
  children: React.ReactNode;
  targetRect: RectResult;
  translateX?: number;
  translateY?: number;
}

export default function Tooltip({
  targetRect,
  children,
  translateX = 0,
  translateY = 0,
}: TooltipProps) {
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = getRect(ref.current);
      setTooltipHeight(rect!.height);
      setTooltipWidth(rect!.width);
    }
  }, [targetRect]);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect !== null) {
    tooltipX = targetRect.left + tooltipWidth + translateX;
    tooltipY = targetRect.top - tooltipHeight + translateY;
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
