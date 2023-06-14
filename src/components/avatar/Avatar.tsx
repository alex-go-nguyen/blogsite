import * as React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import Image from 'next/image';

export interface AvatarProps {
  src?: string;
  width: number;
  height: number;
  alt: string;
  onClick?: () => void;
}

export default function Avatar({ src, width, height, alt, onClick }: AvatarProps) {
  return (
    <div
      className="rounded-full overflow-hidden cursor-pointer relative hover:opacity-60"
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={onClick}
    >
      {src ? (
        <Image src={src} fill quality={100} alt={alt} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      ) : (
        <HiUserCircle className="w-full h-full text-gray-400 dark:text-white" />
      )}
    </div>
  );
}
