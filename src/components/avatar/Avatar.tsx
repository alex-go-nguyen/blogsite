import * as React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import cx from 'classnames';
import Image from 'next/image';

export interface AvatarProps {
    src?: string;
    width: number;
    height: number;
    alt?: string;
}

export default function Avatar({ src, width, height, alt }: AvatarProps) {
    return (
        <div className={cx('rounded-full overflow-hidden cursor-pointer')}>
            {src ? (
                <Image src={src} width={width} height={height} alt={alt} />
            ) : (
                <HiUserCircle className="w-10 h-10 text-gray-400 dark:text-white" />
            )}
        </div>
    );
}
