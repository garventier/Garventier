import "./globals.css";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={garamond.className}>{children}</body></html>;
}
