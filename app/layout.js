import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Herrería Javier Page",
  description: "Herreria de obra, realizamos puertas, rejas, portones de todo tipo y tamaño .. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
