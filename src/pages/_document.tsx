<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
<<<<<<< HEAD
      <body className="bg-light-mode dark:bg-dark-mode">
        <Main />
        <NextScript />
      </body>
=======
      <motion.body transition={{ delay: 1, duration: 0.5 }} className="bg-white dark:bg-dark-mode">
        <Main />
        <NextScript />
      </motion.body>
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
    </Html>
  );
}
