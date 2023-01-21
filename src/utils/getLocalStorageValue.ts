export function getLocalStorageValue(name?: string) {
  if (!name) return "";

  const value = localStorage.getItem(name);

  if (value) return value;

  return "";
}
