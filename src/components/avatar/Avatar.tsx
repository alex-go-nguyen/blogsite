import * as React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type HandleChange = (data: FileList | null) => void;

export type AvatarProps = {
  src?: string;
  width: number;
  height: number;
  alt: string;
  onClick?: () => void;
} & (({ isPicker: true } & { onChange: HandleChange }) | ({ isPicker?: false } & { onChange?: HandleChange }));

export default function Avatar({ src, width, height, alt, isPicker, onClick, onChange }: AvatarProps) {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  }, [file]);

  return (
    <div
      className="rounded-full overflow-hidden cursor-pointer relative hover:opacity-60"
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={onClick}
    >
      {previewUrl ? (
        <Image
          src={previewUrl}
          fill
          quality={100}
          alt={alt}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      ) : src ? (
        <Image src={src} fill quality={100} alt={alt} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      ) : (
        <HiUserCircle className="w-full h-full text-gray-400 dark:text-white" />
      )}
      {isPicker && (
        <label
          htmlFor="imagePicker"
          className="absolute font-bold w-full h-full rounded-full flex items-center text-center hover:bg-gray-200 hover:bg-opacity-30 text-transparent hover:text-black cursor-pointer"
        >
          Choose Image
          <input
            id="imagePicker"
            type="file"
            hidden
            onChange={(e) => {
              setFile(e.target.files && e.target.files[0]);
              onChange(e.target.files);
            }}
          />
        </label>
      )}
    </div>
  );
}
