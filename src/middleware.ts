import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // Redirect to default locale if none detected
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es-419|es-MX|es-CO|es-CL|es-PE|en-US)/:path*']
};