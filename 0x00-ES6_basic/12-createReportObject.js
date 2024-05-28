export default function createReportObject(employeesList) {
	return {
		"allEmployees": employeesList,
		getNumberOfDepartments(employeesList) {
			let i = 0;
			for (let key in employeesList) i++;
			return i;
		}
	}
}
