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
};
