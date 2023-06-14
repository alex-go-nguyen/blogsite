import { PropsWithChildren, useEffect, useRef } from 'react';
import cx from 'classnames';

export interface PopperProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popper({ isOpen, onClose, children }: PopperProps) {
  const popperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popperRef.current && !popperRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popperRef}
      className={cx(
        'absolute -bottom-1 right-0 translate-y-full bg-white dark:bg-dark-mode text-color-thin dark:text-color-thin-dark font-semibold z-10 border dark:border-dark-mode min-w-max rounded-md overflow-hidden z-20',
        isOpen ? 'block' : 'hidden',
      )}
    >
      {children}
    </div>
  );
}
