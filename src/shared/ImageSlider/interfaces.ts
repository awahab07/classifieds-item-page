import { ComponentType, FunctionComponent } from 'react';

export interface ISliderImageProps {
  url: string;
  thumbnailUrl: string;
  fullScreenUrl: string;
  caption: string;
}

export interface ISlideProps extends ISliderImageProps {
  isMobile: boolean;
  isOnFullScreen: boolean;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  onSlideClick?: () => void;
}

export interface IImageSliderProps {
  slideRenderer: FunctionComponent<ISlideProps>;
  thumbnailRenderer: FunctionComponent<IThumbnailProps>;
  data: ISliderImageProps[];
  isMobile: boolean;
  showThumbnails?: boolean;
  width?: number;
  goToFullScreenOnClick?: boolean;
}

export interface IStepperProps {
  thumbnails: ISliderImageProps[];
  activeIndex: number;
  handleClick: (index: number) => () => void;
  Renderer: ComponentType<IThumbnailProps>;
}

export interface IThumbnailProps {
  selected: boolean;
  url: string;
  caption: string;
}
