import { BaseResponseData } from '@/dtos/base';
import { Category } from '@/services/category/category.dto';
import { FormEvent, HTMLAttributes } from 'react';
import cx from 'classnames';
import { FiChevronDown } from 'react-icons/fi';

export interface SelectorProps extends HTMLAttributes<HTMLDivElement> {
  data: BaseResponseData<Category>[];
  onChange: (data: FormEvent<HTMLDivElement> | string) => void;
}

export default function Selector({ data, onChange, className }: SelectorProps) {
  return (
    <div className="relative flex items-center">
      <select
        defaultValue={data?.[0].attributes.name}
        onChange={(e) => onChange(e.target.value)}
        className={cx(
          'px-4 py-2 w-full bg-transparent dark:text-gray-200 border-2 rounded-lg dark:border-dark-mode appearance-none ',
          className,
        )}
      >
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.attributes.name}
          </option>
        ))}
      </select>
      <span className="absolute right-2 -z-10">
        <FiChevronDown />
      </span>
    </div>
  );
}
