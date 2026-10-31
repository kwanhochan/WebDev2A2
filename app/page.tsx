/*
 * File: page.tsx
 * Made by: Kwan Ho Chan
 * Date: oct 30th
 * This is the home page and the only page in the app.
 * Its only job is to draw the StudentPortal component, which does all the real work.
 * Keeping the page this small means the layout (Navbar and Footer) and the portal stay separate.
 * It outputs the StudentPortal, which appears between the Navbar and Footer from layout.tsx.
 */
import StudentPortal from "@/components/StudentPortal";

const Home = () => {
  return <StudentPortal />;
};

export default Home;
