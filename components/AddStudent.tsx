

"use client";

/*
 * File: AddStudent.tsx
 * Author: Zain Ahmed
 * Date: 10-30-2026
 * Description: AddStudent shows four inputs (first name, last name, grade, average) and an Add student button.
 * Its only input is the onAdd callback, which StudentPortal hands down so this component can ask for a new student.
 * Every input is controlled by its own piece of state; grade starts at 9 and average starts at 70.
 * When the button is clicked, nothing happens if either name is empty; otherwise it calls onAdd with the four values
 * (turning grade and average into numbers) and then resets the inputs to their starting values.
 * It outputs a white card with the four labelled inputs and the button.
 */

import { useState } from "react";

// ---------- Props ----------
interface AddStudentProps {
  onAdd: (firstName: string, lastName: string, grade: number, average: number) => void;
}

// ---------- Starting values ----------
const STARTING_GRADE = "9";
const STARTING_AVERAGE = "70";

// ---------- Component ----------
const AddStudent = ({ onAdd }: AddStudentProps) => {
  // ----- State: one per input (inputs always give back text) -----
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(STARTING_GRADE);
  const [average, setAverage] = useState(STARTING_AVERAGE);

  // ----- Change handlers: keep each input's state in sync -----
  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGrade(event.target.value);
  };

  const handleAverageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAverage(event.target.value);
  };

  // ----- Add button: guard, send up, reset -----
  const handleClick = () => {
    if (firstName === "" || lastName === "") {
      return;
    }

    onAdd(firstName, lastName, Number(grade), Number(average));

    setFirstName("");
    setLastName("");
    setGrade(STARTING_GRADE);
    setAverage(STARTING_AVERAGE);
  };

  // ----- Shared input style -----
  const inputClasses =
    "mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none";

  // ----- Output -----
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="grade" className="text-sm font-medium text-slate-700">
            Grade
          </label>
          <input
            id="grade"
            type="number"
            min="9"
            max="12"
            value={grade}
            onChange={handleGradeChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="average" className="text-sm font-medium text-slate-700">
            Average
          </label>
          <input
            id="average"
            type="number"
            min="0"
            max="100"
            value={average}
            onChange={handleAverageChange}
            className={inputClasses}
          />
        </div>
      </div>

      <button
        onClick={handleClick}
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white
                   hover:bg-blue-700 transition cursor-pointer"
      >
        Add student
      </button>
    </div>
  );
};

export default AddStudent;
