export const metadata = {
  title: "Ops Fuel",
  description: "Tactical Nutrition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}