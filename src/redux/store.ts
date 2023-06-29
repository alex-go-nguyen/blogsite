import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { articleDetailSlice } from './features/articles/articleSlice';
import { articlesSlice } from './features/articles/articlesSlice';
<<<<<<< HEAD
=======
import { articlesWriterSlice } from './features/articles/articlesFilterSlice';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
import { categoriesSlice } from './features/categories/categoriesSlice';
import { userDetailSlice } from './features/users/userSlice';
import { usersSlice } from './features/users/usersSlice';
import { authSlice } from './features/auth/authSlice';
import { postArticleSlice } from './features/articles/postArticleSlice';
import { categorySlice } from './features/categories/categorySlice';
import { commentsSlice } from './features/comments/commentsSlice';
import { handleCommentSlice } from './features/comments/commentSlice';
<<<<<<< HEAD
import { articlesFilterSlice } from './features/articles/articlesFilterSlice';
=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176

export const store = configureStore({
  reducer: {
    articles: articlesSlice.reducer,
    articleDetail: articleDetailSlice.reducer,
<<<<<<< HEAD
    articlesFilter: articlesFilterSlice.reducer,
=======
    articlesWriter: articlesWriterSlice.reducer,
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
    postArticle: postArticleSlice.reducer,
    users: usersSlice.reducer,
    userDetail: userDetailSlice.reducer,
    categories: categoriesSlice.reducer,
    categoryDetail: categorySlice.reducer,
    auth: authSlice.reducer,
    comments: commentsSlice.reducer,
    handleComment: handleCommentSlice.reducer,
  },
});

const makeStore = () => store;

export const storeWrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
