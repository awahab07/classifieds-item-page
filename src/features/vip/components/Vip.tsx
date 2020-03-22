import { Grid, Paper } from '@material-ui/core';
import React, { FunctionComponent, PropsWithChildren, ReactElement, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { IArticleImage } from '../../../models/ArticleImage';
import { ImageResolution } from '../../../models/ImageResolution';
import ImageSlider, { ISliderImageProps } from '../../../shared/ImageSlider';
import { filterUniqueByUrl, getImageUrl } from '../../../shared/utils/images';
import { useIsMobile } from '../../../shared/utils/screen';
import { RootState } from '../../../store';
import { vipActions } from '../index';
import { useStyles } from '../styles';
import ArticleCta from './ArticleCta';
import MobileNavBar from './MobileNavBar';
import SellerInfo from './SellerInfo';
import Slide from './Slide';
import Thumbnail from './Thumbnail';
import VipHeader from './VipHeader';

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
    <>
      {isMobile && vip !== null ? <MobileNavBar title={vip.title} price={vip.price} /> : null}
      <Paper elevation={0}>
        <Grid
          className={classes.grow}
          container
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          {!isMobile && vip !== null ? <VipHeader {...vip} /> : null}
          <ImageSlider
            data={sliderImages}
            slideRenderer={Slide}
            thumbnailRenderer={Thumbnail}
            isMobile={isMobile}
          />
          {isMobile && vip !== null ? <ArticleCta {...vip} /> : null}
          {vip !== null ? <SellerInfo contact={vip.contact}/> : null}
        </Grid>
      </Paper>
    </>
  );
};

export default Vip;
