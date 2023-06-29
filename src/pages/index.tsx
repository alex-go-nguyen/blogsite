import { HomepageData } from '@/services/homepage/homepage.dto';
import { getArticles, getMoreArticles } from '@/redux/features/articles/articlesSlice';
import { storeWrapper, useAppDispatch, useAppSelector } from '@/redux/store';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useEffect } from 'react';
import { motion } from 'framer-motion';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
import { getHomepageAPI } from '@/services/homepage/homepage.service';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Button, Card, Slider, Seo } from '@/components';
<<<<<<< HEAD
import { PAGE_SIZE } from '@/constants';
import { getCategories } from '@/redux/features/categories/categoriesSlice';

=======

const PAGE_SIZE = 6;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
export default function Home({ homepage }: InferGetStaticPropsType<GetStaticProps>) {
  const { t } = useTranslation('home');

  const dispatch = useAppDispatch();

  const { loading, data, nextPage: page, isMaximum } = useAppSelector((state) => state.articles);

  const handleLoadMore = () => {
    dispatch(getMoreArticles({ page, pageSize: PAGE_SIZE }));
  };

  useEffect(() => {
    if (!data) {
      dispatch(getArticles({ page: 1, pageSize: PAGE_SIZE }));
    }
  }, [dispatch, data]);

  const translate = {
    titleContent: t('titleContent'),
    viewMore: t('viewMore'),
  };

  return (
    <div className="my-4">
      <Seo seo={homepage.attributes.seo} />
<<<<<<< HEAD
      <Slider data={data.slice(0, PAGE_SIZE)} />
      <h1 className="text-xl font-bold mt-16 mb-4">{translate.titleContent}</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
=======
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 1 }}>
        <Slider data={data} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-xl font-bold mt-16 mb-4"
      >
        {translate.titleContent}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
        {data.map((item) => (
          <Card
            isLoading={loading}
            title={item.attributes.title}
            thumbnail={item.attributes.thumbnail}
            category={item.attributes.category}
            author={item.attributes.author}
            slug={item.attributes.slug}
            publishedAt={item.attributes.publishedAt}
            key={item.id}
<<<<<<< HEAD
            isRendered
          />
        ))}
      </div>

      {!isMaximum && (
        <div className="lg:flex justify-center">
          <Button
            variant="outlined"
            className="flex items-center my-8 mx-auto w-full lg:w-fit"
            onClick={handleLoadMore}
            loading={loading}
            disabled={loading}
            aria-label={translate.viewMore}
          >
=======
          />
        ))}
      </motion.div>

      {!isMaximum && (
        <div className="lg:flex justify-center">
          <Button variant="outlined" className="my-8 mx-auto w-full lg:w-fit" onClick={handleLoadMore}>
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
            {translate.viewMore}
          </Button>
        </div>
      )}
    </div>
  );
}

Home.Layout = 'Main';

export const getStaticProps: GetStaticProps<{ homepage: HomepageData }> = storeWrapper.getStaticProps(
  ({ dispatch }) =>
    async ({ locale }) => {
      const { data } = await getHomepageAPI();

<<<<<<< HEAD
      await dispatch(getArticles({ page: 1, pageSize: PAGE_SIZE }));
=======
      await dispatch(getArticles({ page: 1, pageSize: 6 }));
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

      return {
        props: {
          homepage: data,
          ...(await serverSideTranslations(locale || 'en', ['common', 'home', 'header', 'footer'])),
        },
<<<<<<< HEAD
        revalidate: 5,
=======
        revalidate: 10,
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
      };
    },
);
