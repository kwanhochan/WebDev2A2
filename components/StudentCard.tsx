
"use client";

/*
File: components/StudentCard.tsx
Author: Ngor
Date: October 30, 2026

This component displays information about one student.
It receives a student object and a removal callback as props.
It uses React state to control whether details are visible.
The details section displays the average and honour roll status.
The component also allows the user to request student removal.
*/

import { useState } from "react";
import type { Student } from "@/data/students";

// Define the props received from StudentList
interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

// Display an individual student
const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="rounded-lg border border-gray-300 bg-white p-5 shadow-sm">
      {/* Student name and grade */}
      <h3 className="text-xl font-semibold text-gray-900">
        {student.firstName} {student.lastName}
      </h3>

      <p className="mt-2 text-gray-600">
        Grade {student.grade}
      </p>

      {/* Show or hide student details */}
      {showDetails && (
        <div className="mt-4">
          <p className="text-gray-700">
            Average: {student.average}%
          </p>

          {student.average >= 80 && (
            <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
              Honour roll
            </span>
          )}
        </div>
      )}

      {/* Student action buttons */}
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>

        <button
          type="button"
          onClick={() => onRemove(student.id)}
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default StudentCard;

