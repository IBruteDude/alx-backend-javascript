export default function iterateThroughObject(reportWithIterator) {
  let str = '';

  for (let c of reportWithIterator) {
    str = (str == '') ? c.toString() : str.concat(' | ', c.toString());
  }

  return str;
}
