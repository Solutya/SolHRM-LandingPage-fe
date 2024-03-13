import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { UtilsProvider } from "@/context/utilsProvider";
import Footer from "@/components/footer/Footer";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SolHRM",
  description: "Solutya Human Resources Managment",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={plus.className}>
        <UtilsProvider>{children}</UtilsProvider>
        <Footer/>
        {/* <script>
          AOS.init({once: true});
        </script> */}
      </body>
    </html>
  );
};
export default RootLayout;
