import Navbar from '@/components/globals/navbar/Navbar';
import '../../public/styles/main.css';
import { Inter, Roboto, Poppins, Raleway } from 'next/font/google';
import Footer from '@/components/globals/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopBar from '@/components/globals/navbar/TopBar';
import Logobar from '@/components/globals/navbar/Logobar';

// const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
// const raleway = Raleway({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });

export const metadata = {
  title: {
    template: `%s | ${process.env.APP_NAME}`,
    default: process.env.APP_NAME,
  },
  applicationName: process.env.APP_NAME,
  description: `Welcome to Pro Printers Agency Limited - your go-to destination for premium custom gift item branding in Ilorin and Lagos. Specializing in UV printing, DTF printing, Large Format Printing (Flex Banner, Stickers), Office Branding, Custom Wall Papers, Vehicle branding, Display Stand, POSM, Product Labels and custom gift and promotional Items`,
  keywords: [
    'Pro Printers',
    'Pro Printers Agency Limited',
    'Printing Press in Lagos',
    'Printing Press in Nigeria',
    'Best Printing Services in Lagos',
    'Best Printing Services in Nigeria',
    'premium custom gift item branding in Ilorin and Lagos',
    'Specializing in UV printing',
    'DTF printing',
    'Large Format Printing (Flex Banner, Stickers)',
    'Office Branding',
    'Custom Wall Papers',
    'Vehicle branding',
    'Display Stand',
    'POSM',
    'Product Labels and custom gift and promotional Item',
  ],
  author: ['Tunde Mudashir - Jaflah Software Developmnt Company LTD'],
  metadataBase: new URL('hhttps://proprintersagency.com/'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={`${process.env.APP_NAME}`} />
        <meta name="theme-color" content="#7502d0" />
        <meta name="msapplication-navbutton-color" content="#7502d0" />
        <meta content="#7502d0" name="msapplication-navbutton-color" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
        <link rel="icon" href="/images/favicon.png" type="image/<generated>" sizes="<generated>" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={poppins.className}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <TopBar />
        <Logobar />
        <Navbar />
        <div className="w-full mt-[0px] md:mt-[0px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
