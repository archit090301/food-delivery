import "./globals.css";

export const metadata = {
  title: "Food Delivery App",
  description: "Full-stack food delivery platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
