import { DM_Sans } from "next/font/google";
import "./globals.css";
import { logo } from "@/public/assets/Icons";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Herrería Javier",
  description:
    "Herreria de obra, realizamos puertas, rejas, portones de todo tipo y tamaño .. ",
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <link rel="icon" href={logo} />
      </head>
      <html lang="es">
        <body className={dm_sans.className}>{children}</body>
      </html>
    </>
  );
}
