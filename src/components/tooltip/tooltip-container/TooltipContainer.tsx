import * as React from 'react';

export interface TooltipContainerProps {
  contentRef: any;
  children: React.ReactNode;
  x: number;
  y: number;
}

export default function TooltipContainer({ contentRef, children, x, y }: TooltipContainerProps) {
  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px), 0`,
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
