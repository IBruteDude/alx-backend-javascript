interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Joe',
	lastName: 'Brandom',
	age: 69,
	location: 'Washington'
}

const student2: Student = {
	firstName: 'Donald',
	lastName: 'Trump',
	age: 420,
	location: 'Washington'
}

const studentsList: Student[] = [student1, student2];

const htmlTable = `<table>
<tr><th>First name</th><th>Location</th></tr>
${studentsList.map((stud)=>`<tr><td>${stud.firstName}</td><td>${stud.location}</td></tr>`).join('\n')}
</table>`


document.querySelector('body').innerHTML += htmlTable
