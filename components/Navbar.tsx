/*
 * File: Navbar.tsx
 * Made by: Kwan Ho Chan
 * Date: Oct 30th
 * Description: The Navbar is the white bar across the top of every page.
 * It takes no props, because the school name and the three links never change.
 * It builds its links from a small array with .map(), so adding a link later only means adding one line of data.
 * Each link points to a section id on the page.
 * It outputs a header with the school name on the left and the Overview, Students and add a student links.
 */

// Links
const navLinks = [
  { id: 1, label: "Overview", href: "#overview" },
  { id: 2, label: "Students", href: "#students" },
  { id: 3, label: "Add a student", href: "#add-student" },
];

// Component
const Navbar = () => {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        {/* School name */}
        <h1 className="text-lg font-bold text-slate-900">New Generation High School</h1>

        {/* Section links: wrap under the name on a narrow phone */}
        <nav className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
