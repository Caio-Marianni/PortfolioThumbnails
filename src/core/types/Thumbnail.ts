import { StaticImageData } from 'next/image';

export default interface Thumbnail {
  id: number,
  cover: StaticImageData,
  tags: string[],
}