import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { UtilsProvider } from "@/context/utilsProvider";
import Footer from "@/components/footer/Footer";
import { AOSinitFile } from "@/utils/AOSinitFile";
import ScrollToTop from "@/utils/ScrollToTop";
import NavBar from "@/components/pages/home/NavBar";
import FbMessenger from "@/utils/FbMessenger";
import { Toaster } from "react-hot-toast";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

const canonicalUrl = "https://solutya.com"
export const metadata = {
  title: "SolHRM - Powering Your HR Journey",
  description: `Discover the top-rated HRM software solution tailored for businesses in Bangladesh. Streamline your HR processes with our cloud-based HR management system. From payroll and leave management to recruitment and HR analytics, our affordable HR software offers comprehensive solutions for companies in Dhaka and beyond. An innovative HR solution powered by Solutya Pvt. Ltd. ${canonicalUrl} Request a demo now!`,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
      <link rel='canonical' href={canonicalUrl} />
        <link
          rel="icon"
          href="./favicon.png"
          type="image/png"
          sizes="<generated>"
        />
      </head>
      <AOSinitFile />
      <body className={plus.className}>
        {/* <NavBar/> */}
        <ScrollToTop />
        <UtilsProvider>{children}</UtilsProvider> 
        <Footer />
        <FbMessenger />
        <Toaster/>
      </body>
    </html>
  );
};
export default RootLayout;
