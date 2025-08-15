import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  
  const isSpanish = locale.startsWith('es');
  
  return {
    title: {
      default: isSpanish 
        ? 'Agente Virtual IA - Automatización Empresarial Sin Código' 
        : 'Virtual AI Agent - No-Code Business Automation',
      template: isSpanish 
        ? '%s | Agente Virtual IA' 
        : '%s | Virtual AI Agent'
    },
    description: isSpanish
      ? 'Transforma procesos manuales en workflows automatizados. Ahorra tiempo, reduce errores y escala tu operación con Agente Virtual IA.'
      : 'Transform manual processes into automated workflows. Save time, reduce errors, and scale your operation with Virtual AI Agent.',
    keywords: isSpanish
      ? ['automatización', 'workflow', 'sin código', 'empresas', 'IA', 'agente virtual', 'procesos', 'automatizar']
      : ['automation', 'workflow', 'no-code', 'business', 'AI', 'virtual agent', 'processes', 'automate'],
    openGraph: {
      title: isSpanish 
        ? 'Agente Virtual IA - Automatización Empresarial' 
        : 'Virtual AI Agent - Business Automation',
      description: isSpanish
        ? 'Automatización empresarial sin código. Transforma procesos manuales en workflows automatizados.'
        : 'No-code business automation. Transform manual processes into automated workflows.',
      type: 'website',
      locale: locale,
      url: `https://agentevirtualia.com/${locale}`,
      siteName: 'Agente Virtual IA',
    },
    twitter: {
      card: 'summary_large_image',
      title: isSpanish 
        ? 'Agente Virtual IA - Automatización Empresarial' 
        : 'Virtual AI Agent - Business Automation',
      creator: '@agentevirtualia',
    },
    alternates: {
      canonical: `https://agentevirtualia.com/${locale}`,
      languages: {
        'es-419': 'https://agentevirtualia.com/es-419',
        'es-MX': 'https://agentevirtualia.com/es-MX',
        'es-CO': 'https://agentevirtualia.com/es-CO',
        'es-CL': 'https://agentevirtualia.com/es-CL',
        'es-PE': 'https://agentevirtualia.com/es-PE',
        'en-US': 'https://agentevirtualia.com/en-US',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}