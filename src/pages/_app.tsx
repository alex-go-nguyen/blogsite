import { ReactElement, ReactNode, createContext } from 'react';
import { Provider } from 'react-redux';
import type { AppContext, AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { storeWrapper } from '@/redux/store';
import { getStrapiMedia } from '@/utils/media';
import Head from 'next/head';
import { GlobalAttributes } from '@/services/global/global.dto';
import { NextPage } from 'next';
import { LayoutKeys, Layouts } from '@/components/layout/Layout';
import { AuthProvider } from '@/components/context/auth';
import '@/styles/globals.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';
import App from 'next/app';
import { getGlobal } from '@/services/global/global.service';

export type NextComponentType<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type MyAppProps = AppProps & {
  Component: NextComponentType & {
    Layout: LayoutKeys;
  };
};
export const GlobalContext = createContext<GlobalAttributes>({});

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => {
  NProgress.done();
  window.scrollTo(0, 0);
});

const MyApp = ({ Component, ...rest }: MyAppProps) => {
  const { global } = rest.pageProps;

  const { store } = storeWrapper.useWrappedStore(rest);

  const Layout = Layouts[Component.Layout] ?? ((page: ReactElement) => page);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.attributes.favicon)} />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <ThemeProvider attribute="class">
          <Provider store={store}>
            <AuthProvider>
              <Layout>
                <Component {...rest.pageProps} />
              </Layout>
            </AuthProvider>
          </Provider>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const { data } = await getGlobal();

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: data } };
};

export default MyApp;
