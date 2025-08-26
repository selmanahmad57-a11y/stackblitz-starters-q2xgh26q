import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body className="bg-indigo-50 text-gray-800 font-sans">{children}</body>
    </html>
  );
}
