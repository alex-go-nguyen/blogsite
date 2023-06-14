import Input from '../Input/Input';
import { FiMail } from 'react-icons/fi';
import Button from '../button/Button';
import { useEffect } from 'react';
import Link from 'next/link';
import LogoFooter from '@/assets/logoFooter';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getCategories } from '@/redux/features/categories/categoriesSlice';

export default function Footer() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="bg-footer-color dark:bg-footer-color-dark">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-6 grid-cols-1 text-center lg:text-left place-items-stretch gap-x-20 border-b-2 dark:border-dark-mode py-6">
          <div className="text-color-medium dark:text-color-medium-dark text-sm lg:col-span-2 py-4">
            <h1 className="text-color-bold dark:text-color-bold-dark text-base font-bold mb-3">About</h1>
            <p className="mb-3 text-color-thin dark:text-color-thin-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <p className="dark:text-color-thin-dark">
              <span className="text-base font-bold text-color-bold dark:text-color-bold-dark">Email: </span>
              info@jstemplate.net
            </p>
            <p className="dark:text-color-thin-dark">
              <span className="text-base font-bold text-color-bold dark:text-color-bold-dark">Phone: </span>
              880 123 456 789
            </p>
          </div>
          <div className="lg:col-span-1 text-color-medium dark:text-color-medium-dark text-sm py-4">
            <h1 className="text-color-bold dark:text-color-bold-dark text-base font-bold mb-3">Quick Link</h1>
            <p className="mb-2 hover:text-red-500">Home</p>
            <p className="mb-2 hover:text-red-500">About</p>
            <p className="mb-2 hover:text-red-500">Blog</p>
            <p className="mb-2 hover:text-red-500">Archived</p>
            <p className="mb-2 hover:text-red-500">Author</p>
            <p className="mb-2 hover:text-red-500">Contact</p>
          </div>
          <div className="lg:col-span-1 text-color-medium dark:text-color-medium-dark text-sm py-4">
            <h1 className="text-color-bold dark:text-color-bold-dark text-base font-bold mb-3">Category</h1>
            {data.map((item) => (
              <Link
                href={`/category/${item.attributes.slug}`}
                className="mb-2 hover:text-red-500 block w-full"
                key={item.id}
              >
                {item.attributes.name}
              </Link>
            ))}
          </div>
          <div className="lg:col-span-2 bg-white text-center px-6 rounded-lg dark:bg-input-dark py-4">
            <h1 className="font-bold mb-1 dark:text-color-bold-dark">Weekly Newsletter</h1>
            <p className="mb-8 dark:text-color-blur">Get blog articles and offers via email</p>
            <Input placeholder="Your Email" endDecorator={<FiMail />} />
            <Button variant="solid" type="submit" className="mt-3 w-full">
              Subcribe
            </Button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 text-center lg:text-left items-center py-6">
          <div className="flex justify-center lg:col-span-2 lg:justify-start py-4">
            <LogoFooter />
          </div>
          <div className="lg:col-span-1 lg:flex justify-between text-sm text-color-medium dark:text-color-medium-dark">
            <Link href="/" className="px-4 py-4 hover:text-red-500">
              Terms of Use
            </Link>
            <Link href="/" className="px-4 py-4 hover:text-red-500">
              Privacy Policy
            </Link>
            <Link href="/" className="px-4 py-4 hover:text-red-500">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
