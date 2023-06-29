<<<<<<< HEAD
import { DetailedHTMLProps, SelectHTMLAttributes, forwardRef } from 'react';
=======
import { DetailedHTMLProps, HTMLAttributes, SelectHTMLAttributes, forwardRef } from 'react';
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
import cx from 'classnames';
import { FiChevronDown } from 'react-icons/fi';

export type SelectProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      <select
        ref={ref}
        className={cx(
          'pl-4 pr-8 py-2 w-full bg-transparent dark:bg-dark-mode dark:text-gray-200 border-2 rounded-lg dark:border-dark-mode appearance-none placeholder-gray-400 cursor-pointer',
          className,
        )}
        {...props}
      />
<<<<<<< HEAD
      <span className="absolute right-2 dark:text-white z-10">
=======
      <span className="absolute right-2 -z-10 dark:text-white">
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
        <FiChevronDown />
      </span>
    </div>
  );
});

export { Select };