import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Agente Virtual IA - Automatización Empresarial',
    short_name: 'Agente Virtual IA',
    description: 'Plataforma de automatización empresarial sin código. Transforma procesos manuales en workflows automatizados.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}