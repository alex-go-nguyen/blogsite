import Button from '@/components/button/Button';
import Card from '@/components/card/Card';
import Seo from '@/components/seo/seo';
import Slider from '@/components/slider/Slider';
import { HomepageData, HomepageResponse } from '@/services/homepage/homepage.dto';
import { getArticles } from '@/redux/features/articles/articlesSlice';
import { storeWrapper, useAppDispatch, useAppSelector } from '@/redux/store';
import axiosClient from '@/utils/axiosClient';
import { getStrapiMedia } from '@/utils/media';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home({ homepage }: InferGetStaticPropsType<GetStaticProps>) {
  const dispatch = useAppDispatch();

  const { loading, data } = useAppSelector((state) => state.articles);

  useEffect(() => {
    if (!data) {
      dispatch(getArticles(1));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Seo seo={homepage.attributes.seo} />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <Slider data={data} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-xl font-bold mt-16 mb-4"
      >
        Latest Post
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {data.map((item) => (
          <Card
            isLoading={loading}
            title={item.attributes.title}
            thumbnail={getStrapiMedia(item.attributes.thumbnail)}
            category={item.attributes.category.data.attributes.name}
            author={{
              id: item.attributes.author.data.id,
              name: item.attributes.author.data.attributes.name,
              image: getStrapiMedia(item.attributes.author.data.attributes.avatar),
            }}
            slug={item.attributes.slug}
            publishedAt={item.attributes.publishedAt}
            key={item.id}
          />
        ))}
      </motion.div>

      <Link href="/blog" className="lg:flex justify-center">
        <Button variant="outlined" className="my-8 mx-auto w-full lg:w-fit">
          View All Post
        </Button>
      </Link>
    </div>
  );
}

Home.Layout = 'Main';

export const getStaticProps: GetStaticProps<{ homepage: HomepageData }> = storeWrapper.getStaticProps(
  ({ dispatch }) =>
    async () => {
      const { data } = await axiosClient.get<HomepageResponse>('/homepage', {
        params: {
          populate: {
            hero: '*',
            seo: { populate: '*' },
          },
        },
      });

      await dispatch(getArticles(1));

      return {
        props: { homepage: data.data },
      };
    },
);
