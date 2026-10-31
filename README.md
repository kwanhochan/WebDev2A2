This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Live site:** https://web-dev2-a2.vercel.app
## Group members

| Member | Name | Built |
|---|---|---|
| A | Kwan Ho Chan | `app/layout.tsx`, `Navbar`, `Footer`, `StatsPanel`, overall look |
| B | Ngor | `data/students.ts`, `StudentList`, `StudentCard` |
| C | Zain Ahmed | `StudentPortal`, `SearchBox`, `AddStudent` |


| # | Do this | You should see | Result |
|---|---|---|---|
| 1 | Open the app. | Every student from the data file shows, and the three numbers match the data (8 students, 4 honour roll, 2 graduating). | Pass |
| 2 | Click **Show details** on one card, then click it again. | That card shows the average (and Honour roll if it is 80 or more) and the button reads Hide details. No other card opens. The second click closes it. | Pass |
| 3 | Remove a grade 12 student. | The student is gone, and both Students and Graduating drop by one. | Pass |
| 4 | Type a last name in capitals, such as AHMED, into the search box. Then empty the box. | Only the matching student shows. When the box is empty, every student is back. | Pass |
| 5 | Search for zzz. | The no-students message shows. The three numbers do not change. | Pass |
| 6 | Leave the first name empty, fill in the last name, and click **Add student**. | Nothing is added. | Pass |
| 7 | Fill in all four inputs and click **Add student**. | The student appears, the numbers update, both name inputs are empty, grade shows 9 and average shows 70. | Pass |
| 8 | Click **Clear all**. | The no-students message shows, and all three numbers are 0. | Pass |
| 9 | Narrow the browser to phone width (DevTools device toolbar). | The cards stack in one column, and nothing scrolls sideways. | Pass |
| 10 | Click each link in the navbar. | The page jumps to that section. | Pass |
