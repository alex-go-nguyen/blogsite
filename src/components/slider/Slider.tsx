import Label from '../label/Label';
import Avatar from '../avatar/Avatar';
import Image from 'next/image';
import Link from 'next/link';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import { getStrapiMedia } from '../../utils/media';
import { Article } from '@/services/article/article.dto';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderSlick from 'react-slick';
import { CSSProperties } from 'react';
import moment from 'moment';
import { BaseResponseData } from '@/dtos/base';
import { motion } from 'framer-motion';

export interface SliderProps {
  data: BaseResponseData<Article>[];
}

export interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const SliderPrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div onClick={onClick}>
      <TfiAngleLeft className="absolute hidden lg:block cursor-pointer z-10 text-5xl top-1/2 -translate-y-1/2 text-white opacity-50 hover:opacity-100" />
    </div>
  );
};

const SliderNextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div onClick={onClick}>
      <TfiAngleRight className="absolute hidden lg:block cursor-pointer z-10 right-0 text-5xl top-1/2 -translate-y-1/2 text-white opacity-50 hover:opacity-100" />
    </div>
  );
};

function Slider({ data }: SliderProps) {
  return (
    <div className="rounded-lg">
      <SliderSlick
        dots={false}
        autoplay
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        prevArrow={<SliderPrevArrow />}
        nextArrow={<SliderNextArrow />}
      >
        {data.map((item) => (
          <div className="rounded-lg relative aspect-[16/8]" key={item.id}>
            <Image
              src={getStrapiMedia(item.attributes.thumbnail)}
              alt={item.attributes.title}
              fill
              style={{
                objectFit: 'cover',
              }}
              className="rounded-lg"
            />
            <Link href={`/blog/${item.attributes.slug}`}>
              <div className="absolute lg:w-2/5 text-sm drop-shadow-xl shadow-red-500 lg:left-16 text-white lg:text-inherit bottom-4 lg:bg-white px-8 py-4 rounded-lg lg:dark:bg-dark-mode lg:bg-opacity-90">
                <div className="my-4">
                  <Label color="primary">{item.attributes.category.data.attributes.name}</Label>
                </div>
                <p className="flex font-bold text-2xl mb-4 dark:text-color-bold-dark">{item.attributes.title}</p>
                <div className="flex items-center drop-shadow-xl lg:text-color-blur">
                  <Avatar
                    src={getStrapiMedia(item.attributes.author.data.attributes.avatar)}
                    width={40}
                    height={40}
                    alt={item.attributes.title}
                  />
                  <p className="ml-2 mr-4 font-medium">{item.attributes.author.data.attributes.name}</p>
                  <p>{moment(item.attributes.publishedAt).format('MMMM DD, YYYY')}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </SliderSlick>
    </div>
  );
}

export default Slider;
