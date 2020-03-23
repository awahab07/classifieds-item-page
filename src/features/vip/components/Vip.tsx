import { Grid, Paper } from '@material-ui/core';
import React, { FunctionComponent, PropsWithChildren, ReactElement, useEffect } from 'react';
import Helmet from 'react-helmet';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { IArticleImage } from '../../../models/ArticleImage';
import { ImageResolution } from '../../../models/ImageResolution';
import AppBreadcrumbs from '../../../shared/AppBreadcrumbs/AppBreadcrumbs';
import ImageSlider, { ISliderImageProps } from '../../../shared/ImageSlider';
import { filterUniqueByUrl, getImageUrl } from '../../../shared/utils/images';
import { useIsMobile } from '../../../shared/utils/screen';
import { serializeTitle } from '../../../shared/utils/seo';
import { RootState } from '../../../store';
import { vipActions } from '../index';
import { useStyles } from '../styles';
import ArticleAttributes from './ArticleAttributes';
import ArticleCta from './ArticleCta';
import ArticleDescription from './ArticleDescription';
import ArticleFeatures from './ArticleFeatures';
import MobileNavBar from './MobileNavBar';
import SellerInfo from './SellerInfo';
import Slide from './Slide';
import Thumbnail from './Thumbnail';
import VipHeader from './VipHeader';

const Vip: FunctionComponent = (props: PropsWithChildren<{}>): ReactElement => {
  const dispatch = useDispatch();
  const { vip } = useSelector((state: RootState) => state.vipSlice, shallowEqual);
  const match = useRouteMatch();

  useEffect(() => {
    dispatch(vipActions.getVip());
  }, []);

  const classes = useStyles();
  const isMobile = useIsMobile();
  const seoTitle = vip !== null ? serializeTitle(vip.title) : '';

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
      <Helmet>
        <title>{`Mobile.de | Cars`}</title>
      </Helmet>

      <Switch>
        <Route path={`${match.path}/:vipTitle`}>
          <Helmet>
            <title>{`Mobile.de | Cars | ${vip?.title}`}</title>
          </Helmet>

          {isMobile && vip !== null ? <MobileNavBar title={vip.title} price={vip.price} /> : null}

          <AppBreadcrumbs parentUrl={match.url} currentUrlSegment={seoTitle} />
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

              {vip !== null ? <SellerInfo contact={vip.contact} /> : null}

              {vip !== null ? <ArticleAttributes attributes={vip.attributes} /> : null}

              {vip !== null ? <ArticleFeatures features={vip.features} /> : null}

              {vip !== null ? <ArticleDescription description={vip.htmlDescription} /> : null}
            </Grid>
          </Paper>
        </Route>

        {vip !== null ? (
          <Redirect exact={true} from={`${match.path}`} to={`${match.path}/${seoTitle}`} />
        ) : null}
      </Switch>
    </>
  );
};

export default Vip;
