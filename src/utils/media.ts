import { ImageType } from '@/dtos/media.dto';

export function getStrapiURL(path: string = '') {
  return `http://127.0.0.1:1337${path}`;
}

export function getStrapiMedia(image: ImageType) {
  const { url } = image;

  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
}
