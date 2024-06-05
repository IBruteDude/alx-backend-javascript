export default function setFromArray(arr) {
  if (!Array.isArray(arr)) return [];

  return new Set(arr);
}
