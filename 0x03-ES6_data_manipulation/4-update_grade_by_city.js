export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades) || city.constructor !== String)
	return [];

  return students.filter((student) => (student.location === city)).map((student) => {
    const newGrade = newGrades.filter((record) => record.studentId === student.id);
    student.grade = (newGrade.length !== 0) ? newGrade[0].grade : 'N/A';
    return student;
  });
}
