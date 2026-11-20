export const metadata = {
  title: 'Akramul Hasan | Full-Stack & Next.js Developer Portfolio',
  description: 'Full-Stack Developer & Software Engineering Student at BUBT (5th Semester). Specialized in React, Next.js, Node.js, and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#060a12] text-slate-100 font-sans selection:bg-sky-500 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
