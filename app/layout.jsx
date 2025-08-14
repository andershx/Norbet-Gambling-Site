export const metadata = {
  title: "Styled Starter",
  description: "A minimal Next.js + Tailwind starter that always loads CSS on Vercel.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
