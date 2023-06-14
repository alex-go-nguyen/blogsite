import { PropsWithChildren } from 'react';
import AccountNavbar from '../UserManagement/accountNavbar/AccountNavbar';
import UserManagementHeader from '../UserManagement/header/UserManagementHeader';

export default function UserManagementLayout({ children }: PropsWithChildren) {
  return (
    <>
      <UserManagementHeader />
      <div className="flex">
        <AccountNavbar className="w-fit border-r" />
        <main className="m-6 p-6 border flex-1">{children}</main>
      </div>
    </>
  );
}
