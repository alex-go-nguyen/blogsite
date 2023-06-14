import { storeWrapper, useAppSelector } from '@/redux/store';
import Avatar from '@/components/avatar/Avatar';
import SocialMedia from '@/components/socialMedia/SocialMedia';
import { getAvatarUser, getStrapiMedia } from '@/utils/media';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Card from '@/components/card/Card';
import { getUserDetail } from '@/redux/features/users/userDetailSlice';
import { getArticlesByWriter } from '@/redux/features/articles/articlesUserSlice';
import { getUsersAPI } from '@/services/user/user.service';
import { SEO } from '@/services/homepage/homepage.dto';
import Seo from '@/components/seo/seo';

export default function Writer() {
  const router = useRouter();

  const dispatch = useDispatch();

  const { data: userData } = useAppSelector((state) => state.userDetail);
  const { data: articlesData } = useAppSelector((state) => state.articlesWriter);

  useEffect(() => {
    if (!userData) {
      dispatch(getUserDetail(Number(router.query.id)) as any);
    }
  }, [userData, dispatch, router.query.id]);

  if (!userData) {
    return null;
  }

  const seo: SEO = {
    metaTitle: userData.name,
    metaDescription: userData.about,
    article: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <div className="my-8">
        <div className="bg-footer-color dark:bg-search-dark py-8">
          <div className="flex justify-center">
            <Avatar
              src={userData.avatar && getAvatarUser(userData.avatar)}
              width={50}
              height={50}
              alt={userData.name || 'writer name'}
            />
            <div className="mx-4">
              <p className="font-bold text-color-bold dark:text-color-bold-dark">{userData.name}</p>
              <p className="text-color-thin dark:text-color-thin-dark">{userData.major}</p>
            </div>
          </div>
          <p className="text-color-medium w-2/3 py-5 mx-auto text-center dark:text-color-medium-dark">
            {userData.about}
          </p>
          <div className="flex justify-center">
            <SocialMedia variant="facebook" href="/" />
            <SocialMedia variant="youtube" href="/" />
            <SocialMedia variant="twitter" href="/" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 my-8">
          {articlesData.map((item) => (
            <Card
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
        </div>
      </div>
    </>
  );
}

Writer.Layout = 'Main';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getUsersAPI();

  const paths = data.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = storeWrapper.getStaticProps(({ dispatch }) => async ({ params }) => {
  const writerId = Number(params?.id);

  await dispatch(getUserDetail(writerId));
  await dispatch(getArticlesByWriter(writerId));

  return {
    props: {},
  };
});
