import { PropsWithChildren } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
}
