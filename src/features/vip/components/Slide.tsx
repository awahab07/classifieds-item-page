import React, { FunctionComponent, ReactElement } from 'react';
import { ISlideProps } from '../../../shared/ImageSlider';

const Slide: FunctionComponent<ISlideProps> = (props: ISlideProps): ReactElement => {
  return (
    <img
      data-test-id={'vip.slide-image'}
      className={props.className}
      src={props.isOnFullScreen && !props.isMobile ? props.fullScreenUrl : props.url}
      alt={props.caption}
      onClick={props.onSlideClick}
    />
  );
};

export default Slide;
