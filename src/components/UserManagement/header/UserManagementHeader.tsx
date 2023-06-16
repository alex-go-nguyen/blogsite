import Logo from '@/assets/logo';
import Link from 'next/link';
import * as React from 'react';

export interface UserManagementHeaderProps {}

export default function UserManagementHeader(props: UserManagementHeaderProps) {
  return (
    <div className="flex p-4">
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
}
