
/*
File: components/StudentList.tsx
Author: Ngor
Date: October 30, 2026

This component displays a list of students.
It receives an array of students and a removal callback as props.
It uses map() to create a StudentCard for each student.
Each card receives its student data and the removal callback.
If the list is empty, the component displays a message instead.
*/

import type { Student } from "@/data/students";
import StudentCard from "./StudentCard";

// Define the props received from StudentPortal
interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

// Display the student list
const StudentList = ({ students, onRemove }: StudentListProps) => {
  return (
    <div>
      {/* Show a message when no students match */}
      {students.length === 0 ? (
        <p className="py-8 text-center text-gray-600">
          No students to display.
        </p>
      ) : (
        /* Display student cards in a responsive grid */
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;

