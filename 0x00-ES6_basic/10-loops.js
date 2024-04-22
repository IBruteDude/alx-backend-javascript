export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (let key of array)
    array[i++] = appendString + key;

  return array;
}
