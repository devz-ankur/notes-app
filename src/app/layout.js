import "./globals.css";



export const metadata = {
  title: "Notes App ",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="" >
        {children}
      </body>
    </html>
  );
}
