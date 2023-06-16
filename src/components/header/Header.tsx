import { useTheme } from 'next-themes';
import Switch from '../switch/Switch';
import Link from 'next/link';
import Input from '../Input/Input';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import MiniNavigation from '../modal/MiniNavigation';
import Logo from '@/assets/logo';
import useBoolean from '@/hooks/useBoolean';
import { MdLogin, MdLogout, MdNote } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import Avatar from '../avatar/Avatar';
import { TfiPencilAlt } from 'react-icons/tfi';
import { getAvatarUser } from '@/utils/media';
import Popper from '../popper/Popper';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '@/components/context/auth';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Header() {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const { value, toggle } = useBoolean(false);

  const { value: dropdownValue, setFalse, toggle: toggleDropdown } = useBoolean(false);

  const { user, logout } = useAuth({});

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: 'spring' }}
      className="container grid grid-cols-3 lg:grid-cols-11 items-center justify-between mx-auto py-6"
    >
      <div className="lg:hidden col-span-1 z-20">
        <span className="text-4xl" onClick={toggle}>
          <AiOutlineMenu />
        </span>
      </div>
      <MiniNavigation isOpen={value}>
        <div className="w-full pt-2 px-4">
          <ul className="col-span-5 text-color-bold dark:text-white ">
            <li className="px-4 mx-2 py-4 cursor-pointer hover:bg-gray-200 transition-all duration-100 rounded-lg dark:hover:bg-slate-500 active:bg-gray-300 dark:active:bg-slate-700">
              <Link href="/">Home</Link>
            </li>
            <li className="px-4 mx-2 py-4 cursor-pointer hover:bg-gray-200 transition-all duration-100 rounded-lg dark:hover:bg-slate-500 active:bg-gray-300 dark:active:bg-slate-700">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="px-4 mx-2 py-4 cursor-pointer hover:bg-gray-200 transition-all duration-100 rounded-lg dark:hover:bg-slate-500 active:bg-gray-300 dark:active:bg-slate-700">
              <Link href="">Single Post</Link>
            </li>
            <li className="px-4 mx-2 py-4 cursor-pointer hover:bg-gray-200 transition-all duration-100 rounded-lg dark:hover:bg-slate-500 active:bg-gray-300 dark:active:bg-slate-700">
              <Link href="">Pages</Link>
            </li>
            <li className="px-4 mx-2 py-4 cursor-pointer hover:bg-gray-200 transition-all duration-100 rounded-lg dark:hover:bg-slate-500 active:bg-gray-300 dark:active:bg-slate-700">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </MiniNavigation>
      <Link href="/" className="flex flex-row-reverse lg:block lg:h-full text-black dark:text-white lg:col-span-2">
        <Logo />
      </Link>
      <ul className="hidden lg:flex col-span-3 justify-center items-center text-color-bold dark:text-white">
        <li className="px-4 mx-2 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-100 rounded-lg dark:hover:bg-slate-500">
          <Link href="/">Home</Link>
        </li>
        <li className="px-4 mx-2 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-100 rounded-lg dark:hover:bg-slate-500">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="px-4 mx-2 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-100 rounded-lg dark:hover:bg-slate-500">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hidden lg:block col-span-3">
        <Input
          placeholder="Search"
          endDecorator={<BiSearch />}
          className="bg-gray-100 dark:bg-search-dark dark:border-dark-mode ml-4"
        />
      </div>
      <div className="lg:col-span-2 text-blue-500">
        {user ? (
          <div className="flex justify-end items-center relative">
            <div className="relative">
              <Avatar
                src={user?.avatar && getAvatarUser(user.avatar)}
                width={40}
                height={40}
                alt={user.name}
                onClick={toggleDropdown}
              />
              <Popper isOpen={dropdownValue} onClose={setFalse} onItemClick={setFalse}>
                <Link
                  href="/publish/post"
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white px-4 py-2 flex items-center"
                >
                  <TfiPencilAlt />
                  <span className="ml-3">Write</span>
                </Link>
                <Link
                  href="/profile"
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white px-4 py-2 flex items-center"
                >
                  <FaUser />
                  <span className="ml-3">Personal</span>
                </Link>
                <Link
                  href="/account"
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white px-4 py-2 flex items-center"
                >
                  <ImProfile />
                  <span className="ml-3">Your Account</span>
                </Link>
                <Link
                  href="/"
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white px-4 py-2 flex items-center"
                >
                  <MdNote />
                  <span className="ml-3">Your posts</span>
                </Link>
                <div
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white px-4 py-2 flex items-center border-t dark:border-dark-mode"
                  onClick={handleLogout}
                >
                  <MdLogout />
                  <span className="ml-3">Logout</span>
                </div>
              </Popper>
            </div>
          </div>
        ) : (
          <Link href="/login" className="flex justify-center items-center">
            <span className="px-2">
              <MdLogin />
            </span>
            <span>Sign In/ Sign up</span>
          </Link>
        )}
      </div>
      <div className="hidden lg:flex col-span-1 flex-row-reverse">
        <Switch onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))} />
      </div>
    </motion.div>
  );
}
