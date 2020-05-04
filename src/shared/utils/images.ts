import { IArticleImage } from '../../models/ArticleImage';
import { ImageResolution } from '../../models/ImageResolution';
import { ISliderImageProps } from '../ImageSlider';

export const getImageUrl = (image: IArticleImage, resolution: ImageResolution): string =>
  `//${image.uri}${resolution}.jpg`;

export const filterUniqueByUrl = (value: ISliderImageProps, index: number, array: ISliderImageProps[]): boolean =>
  array.findIndex((iterImage: ISliderImageProps) => iterImage.url === value.url) === index;
