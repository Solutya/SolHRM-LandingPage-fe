import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SolHRM",
  description: "Solutya Human Resources Managment",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={plus.className}>{children}</body>
    </html>
  );
};
export default RootLayout;
