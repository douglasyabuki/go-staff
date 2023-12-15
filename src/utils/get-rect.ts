export type RectResult = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
} | null;

export const getRect = (element: HTMLElement | null): RectResult => {
  if (!element) return null;
  return element.getBoundingClientRect();
};
