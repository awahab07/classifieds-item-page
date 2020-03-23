import { mount } from 'enzyme';
import React, { ComponentType } from 'react';
import ImageSlider from './ImageSlider';
import { IImageSliderProps, ISlideProps, IThumbnailProps } from './interfaces';

const thumbnailRendererId = 'thumbnail-renderer';
const slideRendererId = 'slide-renderer';

let props: IImageSliderProps;
let ThumbnailComponent: ComponentType<IThumbnailProps>;
let SlideComponent: ComponentType<ISlideProps>;

describe('ImageSlider renders correctly', () => {
  beforeEach(() => {
    ThumbnailComponent = (thumbProps: IThumbnailProps) => (
      <>
        <h6 id={thumbnailRendererId}>{thumbProps.caption}</h6>
      </>
    );

    SlideComponent = (slideProps: ISlideProps) => (
      <>
        <h6 id={slideRendererId}>{slideProps.caption}</h6>
        <img src={slideProps.url} />
      </>
    );

    props = {
      isMobile: false,
      data: [{ fullScreenUrl: '', url: '', thumbnailUrl: '', caption: 'Example Caption' }],
      goToFullScreenOnClick: true,
      thumbnailRenderer: ThumbnailComponent,
      width: 1024,
      showThumbnails: true,
      slideRenderer: SlideComponent,
    };
  });

  it('should render correctly', () => {
    const Component = (
      <ImageSlider {...props} />
    );
    const mounted = mount(Component);

    expect(mounted).toMatchSnapshot();
  });
});
