<<<<<<< HEAD
import { PropsWithChildren, ReactElement, ReactNode, createContext } from 'react';
=======
import { ReactElement, ReactNode, createContext } from 'react';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
import { Provider } from 'react-redux';
import type { AppContext, AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { storeWrapper } from '@/redux/store';
import Head from 'next/head';
import { GlobalAttributes } from '@/services/global/global.dto';
import { NextPage } from 'next';
<<<<<<< HEAD
import { Router } from 'next/router';
import App from 'next/app';
import { getGlobalAPI } from '@/services/global/global.service';
import { appWithTranslation } from 'next-i18next';
import { Seo, AuthProvider, Layouts } from '@/components';
import { getStrapiMedia } from '@/utils/media';
import { LayoutKeys } from '@/dtos/layout.dto';
import NProgress from 'nprogress';
import '@/styles/globals.css';
import { Category } from '@/services/category/category.dto';
import { BaseResponseData } from '@/dtos/base';
import { getCategoriesAPI } from '@/services/category/category.service';
=======
import NProgress from 'nprogress';
import { Router } from 'next/router';
import App from 'next/app';
import { getGlobal } from '@/services/global/global.service';
import { appWithTranslation } from 'next-i18next';
import { LayoutKeys, Layouts, Seo, AuthProvider } from '@/components';
import '@/styles/globals.css';
import { getStrapiMedia } from '@/utils/media';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

export type NextComponentType<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type MyAppProps = AppProps & {
  Component: NextComponentType & {
    Layout: LayoutKeys;
  };
};
export const GlobalContext = createContext<GlobalAttributes>({});
<<<<<<< HEAD
export const CategoryContext = createContext<BaseResponseData<Category>[]>([]);
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => {
  NProgress.done();
  window.scrollTo(0, 0);
});

const MyApp = ({ Component, ...rest }: MyAppProps) => {
<<<<<<< HEAD
  const { global, categories } = rest.pageProps;

  const { store } = storeWrapper.useWrappedStore(rest);

  const Layout = Layouts[Component.Layout] ?? ((page: PropsWithChildren<ReactElement>) => page);
=======
  const { global } = rest.pageProps;

  const { store } = storeWrapper.useWrappedStore(rest);

  const Layout = Layouts[Component.Layout] ?? ((page: ReactElement) => page);

  console.log(global.attributes.favicon.data);
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.attributes.favicon.data.attributes.formats.thumbnail)} />
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon.data.attributes.formats.thumbnail)}
<<<<<<< HEAD
          hrefLang="en"
=======
          hrefLang="en-US"
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
        />
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon.data.attributes.formats.thumbnail)}
          hrefLang="vi"
        />
      </Head>
      <Seo seo={global.attributes.defaultSeo} />

      <GlobalContext.Provider value={global.attributes}>
<<<<<<< HEAD
        <CategoryContext.Provider value={categories}>
          <ThemeProvider attribute="class">
            <Provider store={store}>
              <AuthProvider>
                <Layout>
                  <Component {...rest.pageProps} />
                </Layout>
              </AuthProvider>
            </Provider>
          </ThemeProvider>
        </CategoryContext.Provider>
=======
        <ThemeProvider attribute="class">
          <Provider store={store}>
            <AuthProvider>
              <Layout>
                <Component {...rest.pageProps} />
              </Layout>
            </AuthProvider>
          </Provider>
        </ThemeProvider>
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx: AppContext) => {
<<<<<<< HEAD
  const appProps = await App.getInitialProps(ctx);

  const { data } = await getGlobalAPI();

  const { data: categories } = await getCategoriesAPI();

  return { ...appProps, pageProps: { global: data, categories } };
=======
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const { data } = await getGlobal();

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: data } };
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
};

export default appWithTranslation(MyApp);
