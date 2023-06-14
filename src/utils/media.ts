import { Media } from '@/dtos/media.dto';
import { getStrapiURL } from './axiosClient';
import { Avatar } from '@/services/user/users.dto';

export function getStrapiMedia(media: Media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
}

export function getAvatarUser(media: Avatar) {
  const { url } = media;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
}
