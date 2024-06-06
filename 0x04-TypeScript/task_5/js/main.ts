/// <reference path='../../task_4/js/subjects/Subject.ts' />

interface MajorCredits {
	credits: number;
	brand: string;
}
interface MinorCredits {
	credits: number;
	brand: string;
}

function sumMajorCredits(subject1: Subjects.Subject, subject2: Subjects.Subject): MajorCredits {
	return {credits: 3, brand: 'ThreeHours'};
}
function sumMinorCredits(subject1: Subjects.Subject, subject2: Subjects.Subject): MinorCredits {
	return {credits: 2, brand: 'TwoHours'};
}
