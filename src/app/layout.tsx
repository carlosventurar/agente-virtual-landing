import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agente Virtual IA - Automatización Empresarial Sin Código",
  description: "Transforma procesos manuales en workflows automatizados. Ahorra tiempo, reduce errores y escala tu operación con Agente Virtual IA.",
  keywords: "automatización, workflow, sin código, empresas, IA, agente virtual",
  authors: [{ name: "Agente Virtual IA" }],
  creator: "Agente Virtual IA",
  publisher: "Agente Virtual IA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://agentevirtualia.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-419': '/es-419',
      'es-MX': '/es-MX',
      'es-CO': '/es-CO',
      'es-CL': '/es-CL',
      'es-PE': '/es-PE',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Agente Virtual IA - Automatización Empresarial",
    description: "Automatización empresarial sin código. Transforma procesos manuales en workflows automatizados.",
    url: 'https://agentevirtualia.com',
    siteName: 'Agente Virtual IA',
    locale: 'es_419',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agente Virtual IA - Automatización Empresarial",
    description: "Automatización empresarial sin código. Transforma procesos manuales en workflows automatizados.",
    creator: '@agentevirtualia',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale || 'es'} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}