
"use client";

/*
 * File: SearchBox.tsx
 * Author: Zain Ahmed
 * Date: 10-30-2026
 * Description: The SearchBox is a text box that filters the student list by name as you type.
 * Its inputs are searchText (the current search, held in StudentPortal's state) and the onSearchChange callback.
 * It is a controlled input: its value comes from searchText, and every keystroke sends the new text up through onSearchChange.
 * It does no filtering itself; StudentPortal works out the matching students from the list on every render.
 * It outputs a full-width search input with a label.
 */

// ---------- Props ----------
interface SearchBoxProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}

// ---------- Component ----------
const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
  // ----- Event handler: send the typed text up to StudentPortal -----
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  // ----- Output -----
  return (
    <div>
      <label htmlFor="search" className="text-sm font-medium text-slate-700">
        Search by name
      </label>
      <input
        id="search"
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="e.g. Ahmed"
        className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2
                   text-slate-900 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
