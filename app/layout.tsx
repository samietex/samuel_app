import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Shaibu | Data Analyst, Data Scientist and Data Engineer",
  description:
    "Portfolio of Samuel Shaibu, a data analyst, data scientist and data engineer in Vilnius: statistical testing, Power BI dashboards, AWS pipelines and machine learning, with case studies and downloadable resumes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
