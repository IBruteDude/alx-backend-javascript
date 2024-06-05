export default function hasValuesFromArray(set, arr) {
  if (set.constructor !== Set || !Array.isArray(arr)) return [];

  return arr.filter((val) => set.has(val)).length === arr.length;
}
