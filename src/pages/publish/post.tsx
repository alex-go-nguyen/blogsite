import React, { useEffect } from 'react';
import Input from '@/components/Input/Input';
import dynamic from 'next/dynamic';
import Button from '@/components/button/Button';
import { Controller, useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mixed, number, object, string } from 'yup';
import { PostArticlePayloadAttributes } from '@/services/article/article.dto';
import { storeWrapper, useAppDispatch, useAppSelector } from '@/redux/store';
import { useAuth } from '@/components/context/auth';
import { convertToSlug } from '@/utils/slug';
import { postArticle } from '@/redux/features/articles/postArticleSlice';
import Selector from '@/components/selector/Selector';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

const schema = object({
  title: string(),
  description: string(),
  thumbnail: mixed(),
  content: string(),
  category: number(),
});

const Editor = dynamic(() => import('@/components/editor/Editor'), { ssr: false });
export default function PostBlog() {
  const { user } = useAuth({ redirectTo: '/login' });

  const dispatch = useAppDispatch();

  const { data: categories, loading } = useAppSelector((state) => state.categories);

  const { data: articleResponse, loading: postLoading, error } = useAppSelector((state) => state.postArticle);

  const { register, setValue, handleSubmit, reset, control } = useForm<PostArticlePayloadAttributes>({
    resolver: yupResolver(schema),
  });

  const {
    field: { value, onChange, onBlur },
  } = useController({ control, name: 'content' });

  const onSubmitHandler = (payload: PostArticlePayloadAttributes) => {
    if (user) {
      payload.author = user.id;
      payload.slug = convertToSlug(payload.title);
      payload.content = payload.content.replaceAll('http://localhost:1337', '');
      dispatch(postArticle({ data: payload }));
    }
  };

  useEffect(() => {
    if (articleResponse) {
      toast.success('Update password successfully!');
      reset();
    }
  }, [articleResponse, reset]);

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <ToastContainer />
      <div className="mb-4">
        <span className="text-sm font-thin">
          <span className="text-red-500">*</span> Title
        </span>
        <Input {...register('title')} placeholder="Title" />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <span className="text-sm font-thin">
            <span className="text-red-500">*</span> Thumbnail
          </span>
          <Input {...register('thumbnail')} type="file" />
        </div>
        <div>
          <span className="text-sm font-thin">
            <span className="text-red-500">*</span> Category
          </span>
          <Selector data={categories} onChange={(data) => setValue('category', Number(data))} />
        </div>
      </div>
      <div className="mb-4">
        <span className="text-sm font-thin">
          <span className="text-red-500">*</span> Description (SEO)
        </span>
        <Input {...register('description')} placeholder="Description" />
      </div>
      <div className="mb-4 ">
        <Editor onChange={onChange} onBlur={onBlur} value={''} />
      </div>
      <Button type="submit" variant="solid" className="float-right ml-4">
        Confirm
      </Button>
      <Button type="button" variant="outlined" className="float-right">
        Cancel
      </Button>
    </form>
  );
}

PostBlog.Layout = 'Main';
