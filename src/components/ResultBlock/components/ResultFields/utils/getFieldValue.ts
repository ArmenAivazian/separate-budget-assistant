export function getFieldValue(
  salaryArmen: string,
  salaryNastya: string,
  value: number
) {
  const percentDifferent = +salaryNastya / +salaryArmen;

  const firstValue = Math.round((1 - percentDifferent) * value);
  const secondValue = Math.round(percentDifferent * value);

  return firstValue ? { firstValue, secondValue } : null;
}
