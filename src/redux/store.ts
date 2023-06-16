import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { articleDetailSlice } from './features/articles/articleDetailSlice';
import { articlesSlice } from './features/articles/articlesSlice';
import { articlesWriterSlice } from './features/articles/articlesUserSlice';
import { categoriesSlice } from './features/categories/categoriesSlice';
import { userDetailSlice } from './features/users/userSlice';
import { usersSlice } from './features/users/usersSlice';
import { authSlice } from './features/auth/authSlice';
import { postArticleSlice } from './features/articles/postArticleSlice';

export const store = configureStore({
  reducer: {
    articles: articlesSlice.reducer,
    articleDetail: articleDetailSlice.reducer,
    articlesWriter: articlesWriterSlice.reducer,
    postArticle: postArticleSlice.reducer,
    users: usersSlice.reducer,
    userDetail: userDetailSlice.reducer,
    categories: categoriesSlice.reducer,
    auth: authSlice.reducer,
  },
});

const makeStore = () => store;

export const storeWrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
