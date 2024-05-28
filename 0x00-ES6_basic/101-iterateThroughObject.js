export default function iterateThroughObject(reportWithIterator) {
  let str = '';

  for (const c of reportWithIterator) {
    str = (str === '') ? c.toString() : str.concat(' | ', c.toString());
  }

  return str;
}
