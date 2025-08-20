# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multi-language landing page for "Agente Virtual IA" built with Next.js 15, featuring internationalization across Latin American markets and the US. The application serves as a marketing site with automated redirects to the main application.

## Common Development Commands

```bash
# Development
npm run dev        # Start development server

# Build & Deploy
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Architecture & Key Technologies

- **Next.js 15** with App Router and React 19
- **next-intl** for internationalization with locale-specific routing
- **TailwindCSS** with custom design system using CSS variables
- **TypeScript** for type safety
- **Netlify** deployment with security headers and redirects

## Internationalization Structure

The app supports 6 locales with dynamic routing: `es-419` (default), `es-MX`, `es-CO`, `es-CL`, `es-PE`, `en-US`

- **Middleware**: `src/middleware.ts` handles locale detection and routing
- **Config**: `src/i18n/config.ts` contains locale definitions and country-specific configurations
- **Messages**: `src/i18n/messages/` contains translations
- **Layout structure**: Root layout + locale-specific layouts with dynamic metadata

## Key Files & Patterns

- **Root Layout** (`src/app/layout.tsx`): Global metadata, fonts, and NextIntl provider setup
- **Locale Layout** (`src/app/[locale]/layout.tsx`): Dynamic metadata generation based on locale
- **Country Configs**: Each locale has specific currency, VAT rates, business hours, and regulations
- **Components**: Located in `src/components/` with UI components in `src/components/ui/`

## Deployment & Redirects

Deployed on Netlify with:
- Security headers including CSP, HSTS, XSS protection
- Automatic redirects from `/login`, `/register`, and `/app/*` to `app.agentevirtualia.com`
- Static asset caching for performance
- Node.js 20 environment

## Styling

Uses TailwindCSS with a custom design system based on CSS variables defined in `src/app/globals.css`. The color system supports theme customization through HSL color variables.