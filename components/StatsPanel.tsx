/*
 * File: StatsPanel.tsx
 * Made by: Kwan Ho Chan
 * Date: Oct 30th
 * Description: The StatsPanel shows three numbers about the whole student list.
 * Its input is the students prop: the full list of student from StudentPortal.
 * Every time it renders, it counts all the students, the students on the honour roll and the students in grade 12, using .length and .filter(); none of these numbers are kept in state.
 * It outputs three white cards in a grid that update as soon as a student is added or removed.
 */

import { Student } from "@/data/students";

// Props
interface StatsPanelProps {
  students: Student[];
}

// Component
const StatsPanel = ({ students }: StatsPanelProps) => {
  // Derived values: worked out from the list on every render
  const totalCount = students.length;
  const honourRollCount = students.filter((student) => student.average >= 80).length;
  const graduatingCount = students.filter((student) => student.grade === 12).length;

  const stats = [
    { id: 1, label: "Students", value: totalCount },
    { id: 2, label: "Honour roll", value: honourRollCount },
    { id: 3, label: "Graduating", value: graduatingCount },
  ];

  // Output: one card per number
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
          <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsPanel;
