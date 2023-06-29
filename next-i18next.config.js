<<<<<<< HEAD
const path = require('path');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
  },
  localePath: path.resolve('./public/locales'),
  react: { useSuspense: true },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
=======
/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  react: { useSuspense: false }, //this line
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
};
