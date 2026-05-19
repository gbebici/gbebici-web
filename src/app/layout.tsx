import { Inter, Archivo_Black } from 'next/font/google';
import './globals.css';

// Configurando a Inter como fonte principal (textos em geral)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Configurando a Archivo Black para títulos (tem peso único 400)
const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading', // Nome semântico para títulos
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Injetando as duas variáveis no HTML
    <html lang="pt-BR" className={`${inter.variable} ${archivoBlack.variable}`}>
      {/* Opcional: já deixar a font-sans e o antialiased no body pro projeto todo */}
      <body className="font-sans antialiased ">
        {children}
      </body>
    </html>
  );
}