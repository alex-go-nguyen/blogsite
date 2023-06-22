import { LayoutKeys } from '@/components/Layout';
import { NextPage } from 'next';

export type MyPage<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: LayoutKeys;
};
