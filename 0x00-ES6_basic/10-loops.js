export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const newArray = [];
  for (const key of array) {
    newArray[i] = appendString + key;
    i += 1;
  }

  return newArray;
}
