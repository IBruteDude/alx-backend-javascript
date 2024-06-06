interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() { return 'Working from home'; }
  getCoffeeBreak() { return 'Getting a coffee break'; }
  workDirectorTasks() { return 'Getting to director tasks'; }
}

class Teacher implements TeacherInterface {
  workFromHome() { return 'Cannot work from home'; }
  getCoffeeBreak() { return 'Cannot have a break'; }
  workTeacherTasks() { return 'Getting to work'; }
}


function createEmployee(salary: number|string): Director|Teacher {
  if (typeof salary === 'string')
    salary = parseInt(salary);

  if (salary < 500)
    return new Teacher();
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: any): employee is Director {
  return employee instanceof Director;
}

console.log(isDirector(createEmployee(100)))

function executeWork(employee: Director|Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}


console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects)
{
  if (todayClass === 'Math')
    return 'Teaching Math';
  return 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));

