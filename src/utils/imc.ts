export const calculatedIMC = (height: number, weight: number): number => {
  return parseFloat((weight / Math.pow(height / 100, 2)).toFixed(2));
};

export const getIMCClassification = (imc: number): string => {
  if (imc <= 18.5) {
    return 'Thinness';
  }
  if (imc <= 24.9) {
    return 'Average';
  }
  if (imc <= 29.9) {
    return 'Overweight';
  }
  if (imc <= 39.9) {
    return 'Obesity';
  }
  return 'Severe Obesity';
};

export const getObesityDegree = (imc: number): number => {
  if (imc <= 18.5) {
    return 0;
  }
  if (imc <= 24.9) {
    return 0;
  }
  if (imc <= 29.9) {
    return 1;
  }
  if (imc <= 39.9) {
    return 2;
  }
  return 3;
};
