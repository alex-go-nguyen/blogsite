import { ImageType } from '@/dtos/media.dto';

export function getStrapiURL(path: string = '') {
<<<<<<< HEAD
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
=======
  return `http://127.0.0.1:1337${path}`;
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
}

export function getStrapiMedia(image: ImageType) {
  const { url } = image;

  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
<<<<<<< HEAD

=======
>>>>>>> 6f491b1d773fb3c13539b47e83bc11a8847d9176
  return imageUrl;
}
