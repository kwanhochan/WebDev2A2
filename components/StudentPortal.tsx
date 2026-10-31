
"use client";

/*
 * File: components/StudentPortal.tsx
 * Author: zain ahmed
 * Date: 10-30-2026
 * Description: StudentPortal owns the app's data: the list of students and the search text, both held in state.
 * It takes no props; it starts the list from startingStudents in data/students.ts.
 * It is the only component that changes the list: add, remove and clear all each make a brand new array,
 * and children ask for changes through the onAdd, onRemove and onSearchChange callback props.
 * The matching students are worked out from the list and the search text on every render, not stored in state.
 * It outputs the three sections of the page (Overview, Students and Add a student) and the Clear all button.
 */

import { useState } from "react";
import { Student, startingStudents } from "@/data/students";
import StatsPanel from "@/components/StatsPanel";
import SearchBox from "@/components/SearchBox";
import StudentList from "@/components/StudentList";
import AddStudent from "@/components/AddStudent";

// ---------- Component ----------
const StudentPortal = () => {
  // ----- State -----
  const [students, setStudents] = useState<Student[]>(startingStudents);
  const [searchText, setSearchText] = useState("");

  // ----- Derived values: search results, worked out every render -----
  const matchingStudents = students.filter((student) =>
    (student.firstName + " " + student.lastName)
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  // ----- Handlers that change the list (always a new array) -----
  const handleAdd = (firstName: string, lastName: string, grade: number, average: number) => {
    const newStudent = {
      id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      grade: grade,
      average: average,
    };
    setStudents([...students, newStudent]);
  };

  const handleRemove = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleClearAll = () => {
    setStudents([]);
  };

  // ----- Output: the three sections -----
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Overview: numbers from the FULL list */}
      <section id="overview">
        <h2 className="text-xl font-bold text-slate-900">Overview</h2>
        <div className="mt-4">
          <StatsPanel students={students} />
        </div>
      </section>

      {/* Students: search, Clear all, and the FILTERED list */}
      <section id="students" className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-slate-900">Students</h2>
          <button
            onClick={handleClearAll}
            className="text-sm font-semibold text-rose-600 hover:text-rose-800 cursor-pointer"
          >
            Clear all
          </button>
        </div>
        <div className="mt-4">
          <SearchBox searchText={searchText} onSearchChange={setSearchText} />
        </div>
        <div className="mt-6">
          <StudentList students={matchingStudents} onRemove={handleRemove} />
        </div>
      </section>

      {/* Add a student */}
      <section id="add-student" className="mt-12">
        <h2 className="text-xl font-bold text-slate-900">Add a student</h2>
        <div className="mt-4">
          <AddStudent onAdd={handleAdd} />
        </div>
      </section>
    </main>
  );
};

export default StudentPortal;
