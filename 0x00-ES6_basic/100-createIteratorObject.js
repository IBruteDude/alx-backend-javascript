export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]: function* () {
      for (let emps in report.allEmployees)
        for (let emp of report.allEmployees[emps])
          yield emp;
    }
  }
}
