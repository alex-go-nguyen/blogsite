import React, { PropsWithChildren } from 'react';
import cx from 'classnames';

export interface LabelProps {
  color: 'primary' | 'secondary';
}

export default function Label({ color, children }: PropsWithChildren<LabelProps>) {
  return (
    <span
      className={cx(
        'px-4 py-1 rounded-lg font-medium',
        color === 'primary' ? 'bg-blue-500 text-white' : 'bg-label-light text-blue-500 dark:bg-label-dark',
      )}
    >
      {children}
    </span>
  );
}
