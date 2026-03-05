export const metadata = {
  title: "Just Costa | Data. Digital. Growth.",
  description: "Remote Data & Digital Solutions for Growing Businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin:0, fontFamily:"Arial, sans-serif", background:"white", color:"Blue" }}>
        {children}
      </body>
    </html>
  );
}
