import Logo from '@/assets/logo';
import * as React from 'react';

export interface UserManagementHeaderProps {}

export default function UserManagementHeader(props: UserManagementHeaderProps) {
  return (
    <div className="flex p-4">
      <Logo />
    </div>
  );
}
