<<<<<<< HEAD
import { LayoutKeys } from '@/dtos/layout.dto';
=======
import { LayoutKeys } from '@/components/Layout';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
import { NextPage } from 'next';

export type MyPage<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: LayoutKeys;
};
