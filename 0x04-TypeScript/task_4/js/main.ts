/// <reference path='subjects/Teacher.ts' />

const cTeacher: Subjects.Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };

export const cpp = new Subjects.Cpp(cTeacher)
export const java = new Subjects.Java(cTeacher)
export const react = new Subjects.React(cTeacher)

console.log('C++')
cpp.setTeacher(cTeacher)
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

console.log('Java')
cpp.setTeacher(cTeacher)
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

console.log('React')
cpp.setTeacher(cTeacher)
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())
