import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { UtilsProvider } from "@/context/utilsProvider";
import Footer from "@/components/footer/Footer";
import { AOSinitFile } from "@/utils/AOSinitFile";
import ScrollToTop from "@/utils/ScrollToTop";
import NavBar from "@/components/pages/home/NavBar";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SolHRM",
  description: "Solutya Human Resources Managment",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="./favicon.png"
          type="image/png"
          sizes="<generated>"
        />
      </head>
      <AOSinitFile/>
      <body className={plus.className}>
        {/* <NavBar/> */}
        <UtilsProvider>{children}</UtilsProvider>
      {/* <ScrollToTop/> */}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
