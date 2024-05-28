export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const emps in report.allEmployees) {
        if (emps) for (const emp of report.allEmployees[emps]) yield emp;
      }
    },
  };
}
