import { useEffect } from 'react';
import Label from '@/components/label/Label';
import Avatar from '@/components/avatar/Avatar';
import { getStrapiMedia } from '@/utils/media';
import moment from 'moment';
import { storeWrapper, useAppDispatch, useAppSelector } from '@/redux/store';
import { useRouter } from 'next/router';
import { getArticleDetail } from '@/redux/features/articles/articleDetailSlice';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getArticlesAPI } from '@/services/article/article.service';
import Seo from '@/components/seo/seo';
import { SEO } from '@/services/homepage/homepage.dto';

export default function Post() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { data, loading } = useAppSelector((state) => state.articleDetail);

  useEffect(() => {
    if (!data) {
      dispatch(getArticleDetail(router.query.slug as string));
    }
  }, [data, dispatch, router.query.slug]);

  if (!data) return null;

  const seo: SEO = {
    metaTitle: data.title,
    metaDescription: data.description,
    shareImage: data.thumbnail,
    article: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <div className="px-24">
        <div className="my-4">
          <Label color="primary">{data.category.data.attributes.name}</Label>{' '}
        </div>
        <p className="flex text-3xl font-bold mb-4 dark:text-color-bold-dark">{data.title}</p>
        <div className="flex items-center font-sm drop-shadow-xl lg:text-color-blur">
          <Avatar
            src={getStrapiMedia(data.author.data.attributes.avatar)}
            width={40}
            height={40}
            alt={data?.title || 'author'}
          />
          <p className="ml-2 mr-4 font-medium">{data.author.data.attributes.name}</p>
          <p>{moment(data.publishedAt).format('MMMM DD, YYYY')}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.content.replaceAll(/\/uploads/g, 'http://localhost:1337/uploads'),
          }}
          className="my-4"
        />
      </div>
    </>
  );
}

Post.Layout = 'Main';

export const getStaticPaths: GetStaticPaths = async () => {
  const page = 1;
  const data = await getArticlesAPI(page);

  const paths = data.map((item) => ({
    params: {
      slug: item.attributes.slug,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = storeWrapper.getStaticProps(({ dispatch }) => async ({ params }) => {
  await dispatch(getArticleDetail(params?.slug as string));

  return {
    props: {},
  };
});
