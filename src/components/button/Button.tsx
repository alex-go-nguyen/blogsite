import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';
import cx from 'classnames';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'solid' | 'outlined';
  loading?: boolean;
  loadingPosition?: 'start' | 'end';
}

export default function Button({
  variant,
  loading,
  loadingPosition = 'start',
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      disabled={loading}
      className={cx(
        variant === 'solid'
          ? 'bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-900 flex justify-center items-center'
          : 'text-color-thin border-2 dark:border-dark-mode dark:text-color-thin-dark hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-blue-500 dark:hover:text-white dark:hover:border-blue-500 dark:active:bg-blue-700 dark:active:border-blue-700',
        'py-2 px-4 rounded-md font-semibold',
        loading && 'opacity-60 hover:bg-none active:bg-none',
        className,
      )}
    >
      {loading && loadingPosition == 'start' && <AiOutlineLoading3Quarters className="animate-spin-fast mx-2" />}
      {children}
      {loading && loadingPosition == 'end' && <AiOutlineLoading3Quarters className="animate-spin-fast mx-2" />}
    </button>
  );
}
