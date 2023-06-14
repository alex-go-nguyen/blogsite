import { HTMLAttributes, ReactNode } from 'react';
import { BsPersonFill, BsPersonVcardFill } from 'react-icons/bs';
import { MdHome, MdSecurity } from 'react-icons/md';
import { TfiAngleDown } from 'react-icons/tfi';
import cx from 'classnames';
import useBoolean from '@/hooks/useBoolean';
import { HiKey } from 'react-icons/hi';
import { useRouter } from 'next/router';

export interface NavbarSubMenuProps extends HTMLAttributes<HTMLDivElement> {
  startIcons?: ReactNode;
  title?: string;
  href?: string;
}

export const NavbarSubMenu = ({ startIcons, title, children, className }: NavbarSubMenuProps) => {
  const { value, toggle } = useBoolean(false);
  return (
    <div>
      <div
        className={cx('flex items-center relative cursor-pointer pl-4 pr-10 hover:bg-blue-200', className)}
        onClick={toggle}
      >
        {startIcons}
        <span className="mx-4">{title}</span>
        <TfiAngleDown className={cx('text-xs transition-all duration-200 absolute right-4', value && 'rotate-180')} />
      </div>
      {value && <span>{children}</span>}
    </div>
  );
};

export const NavbarSubMenuItem = ({ children, href = '#', className }: NavbarSubMenuProps) => {
  const router = useRouter();

  return (
    <div className="flex items-center px-12 py-2 cursor-pointer hover:bg-blue-200" onClick={() => router.push(href)}>
      {children}
    </div>
  );
};

export const SubMenuItem = ({ children, className }: NavbarSubMenuProps) => {
  return (
    <div className={cx('flex items-center py-2 cursor-pointer pl-4 pr-10 hover:bg-blue-200', className)}>
      {children}
    </div>
  );
};

export default function AccountNavbar({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx('text-base text-color-bold dark:text-color-bold-dark', className)}>
      <SubMenuItem>
        <MdHome />
        <span className="mx-4">Home</span>
      </SubMenuItem>
      <NavbarSubMenu startIcons={<BsPersonVcardFill />} title="My Profile" className="py-2">
        <NavbarSubMenuItem href="/account/profile/personal">
          <BsPersonFill />
          <span className="mx-4">Personal Info</span>
        </NavbarSubMenuItem>
      </NavbarSubMenu>
      <NavbarSubMenu startIcons={<MdSecurity />} title="Security" className="py-2">
        <NavbarSubMenuItem href="/account/security/password">
          <HiKey />
          <span className="mx-4"> Password</span>
        </NavbarSubMenuItem>
      </NavbarSubMenu>
    </div>
  );
}
