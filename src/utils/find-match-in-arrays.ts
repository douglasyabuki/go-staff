export const findMatchInArrays = (arrA: string[], arrB: string[]): boolean => {
  const aToLowerCase = arrA.map((item) => item.toLowerCase());
  return arrB.some((item) => aToLowerCase.includes(item.toLowerCase()));
};
