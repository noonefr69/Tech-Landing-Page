import "./globals.css";

export const metadata = {
  title: "TechBooks",
  description: "TechBook for that lazy guys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
