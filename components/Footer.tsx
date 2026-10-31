/*
 * File: Footer.tsx
 * Made by: Kwan Ho Chan
 * Date: Oct 30th
 * Description: The Footer sits across the bottom of every page and shows the school's contact details.
 * It takes no props, because the school name, address, phone number and email do not change.
 * The details stack on a phone and spread out on wider screens using Tailwind's sm: prefix.
 * It has no state and nothing to click, so it stays a Server Component with no "use client".
 * It outputs a footer with the school name, address, phone number and email.
 */

// Component
const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-2 sm:flex-row sm:justify-between">
        {/* School name */}
        <p className="text-sm font-bold text-slate-900">New Generation High School</p>

        {/* Contact details */}
        <div className="text-sm text-slate-500">
          <p>250 Learning Way NW, Calgary, AB T2M 0L4</p>
          <p>(403) 555-0142</p>
          <p>office@newgenhigh.ca</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
