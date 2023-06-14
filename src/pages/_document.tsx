import { motion } from 'framer-motion';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <motion.body transition={{ delay: 1, duration: 0.5 }} className="bg-white dark:bg-dark-mode">
        <Main />
        <NextScript />
      </motion.body>
    </Html>
  );
}
