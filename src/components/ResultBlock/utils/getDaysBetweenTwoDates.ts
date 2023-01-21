export function getDaysBetweenTwoDates(start: string, end: string) {
  return Math.ceil(
    Math.abs(+new Date(start) - +new Date(end)) / (1000 * 60 * 60 * 24)
  );
}
