import { Grid } from '@material-ui/core';
import React, { FunctionComponent, PropsWithChildren, ReactElement, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { IArticleImage } from '../../models/ArticleImage';
import { ImageResolution } from '../../models/ImageResolution';
import ImageSlider, { ISliderImageProps } from '../../shared/ImageSlider';
import { filterUniqueByUrl, getImageUrl } from '../../shared/utils/images';
import { useIsMobile } from '../../shared/utils/screen';
import { RootState } from '../../store';
import { vipActions } from './index';
import Slide from './Slide';
import { useStyles } from './styles';
import Thumbnail from './Thumbnail';

const Vip: FunctionComponent = (props: PropsWithChildren<{}>): ReactElement => {
  const dispatch = useDispatch();
  const { vip } = useSelector((state: RootState) => state.vipSlice, shallowEqual);
  useEffect(() => {
    dispatch(vipActions.getVip());
  }, []);
  const classes = useStyles();
  const isMobile = useIsMobile();

  const sliderImages: ISliderImageProps[] =
    vip?.images
      ?.map((image: IArticleImage) => ({
        thumbnailUrl: getImageUrl(image, ImageResolution.Thumbnail),
        url: getImageUrl(image, ImageResolution.Normal),
        fullScreenUrl: getImageUrl(image, ImageResolution.FullScreen),
        caption: vip.title,
      }))
      .filter(filterUniqueByUrl) ?? [];

  return (
    <Grid className={classes.grow} container direction={'column'} justify={'center'} alignItems={'center'}>
      <ImageSlider data={sliderImages} slideRenderer={Slide} thumbnailRenderer={Thumbnail} isMobile={isMobile} />
    </Grid>
  );
};

export default Vip;
