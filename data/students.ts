
/*
File: data/students.ts
Author: Ngor
Date: October 29, 2026

This file defines the Student interface used throughout the application.
It describes the properties required for each student.
The students array contains the initial student records.
Other components import this data to display student information.
The file exports both the interface and the student list.
*/

// Define the structure of a student
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

// Initial student records
export const students: Student[] = [
  { id: 1, firstName: "Zara", lastName: "Ahmed", grade: 12, average: 88 },
  { id: 2, firstName: "James", lastName: "Wilson", grade: 11, average: 75 },
  { id: 3, firstName: "Sarah", lastName: "Johnson", grade: 10, average: 92 },
  { id: 4, firstName: "Daniel", lastName: "Brown", grade: 9, average: 68 },
  { id: 5, firstName: "Emily", lastName: "Davis", grade: 12, average: 84 },
  { id: 6, firstName: "Michael", lastName: "Lee", grade: 11, average: 79 },
  { id: 7, firstName: "Olivia", lastName: "Martin", grade: 10, average: 95 },
  { id: 8, firstName: "Noah", lastName: "Taylor", grade: 9, average: 73 },
];

export const startingStudents = students;

