import { Box, createMuiTheme, Grid, IconButton, ThemeProvider } from '@material-ui/core';
import { Fullscreen, FullscreenExit, NavigateBefore, NavigateNext } from '@material-ui/icons';
import React, { ComponentType, PropsWithChildren, ReactElement, useRef, useState } from 'react';
import SwipeableViews, { SwipeableViewsProps } from 'react-swipeable-views';
import {
  bindKeyboard,
  WithBindKeyboardProps,
  WithVirtualizeProps,
} from 'react-swipeable-views-utils';
import { appTheme } from '../../app/theme';
import {
  exitFullscreen,
  fullscreenEnabled,
  isVisibleElement,
  requestFullscreen,
  useFullScreenListener,
} from '../utils/screen';
import { IImageSliderProps, ISliderImageProps } from './interfaces';
import MobileDotsStepper from './MobileDotsStepper';
import useStyles from './styles';
import ThumbnailsStepper from './ThumbnailsStepper';

const SwipeableViewsWithKeyboard = bindKeyboard(SwipeableViews) as ComponentType<
  Partial<SwipeableViewsProps & WithVirtualizeProps & WithBindKeyboardProps>
>;

const sliderDarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const ImageSlider = (props: PropsWithChildren<IImageSliderProps>): ReactElement => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isOnFullScreen, setIsOnFullScreen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const classes = useStyles(props);
  useFullScreenListener((isFullScreen: boolean) => {
    setIsOnFullScreen(isFullScreen);
  });

  const { data, slideRenderer, showThumbnails, thumbnailRenderer, isMobile } = props;
  const SlideRenderer = slideRenderer;

  const handleSwipe = (index: number) => {
    setSlideIndex(index);
  };

  const handleThumbnailClick = (index: number) => () => handleSwipe(index);

  const goToFullScreen = async () => {
    if (!isOnFullScreen && sliderRef !== null && isVisibleElement(sliderRef.current)) {
      if (fullscreenEnabled()) {
        try {
          await requestFullscreen(sliderRef.current);
        } catch (e) {
          setIsOnFullScreen(false);
        }
      } else {
        // TODO: Fallback to fullscreen dialog via React Portal
      }
    }
  };

  const handleToggleFullScreen = () => {
    if (isOnFullScreen) {
      exitFullscreen();
    } else {
      goToFullScreen();
    }
  };

  const handleNavBack = () => {
    setSlideIndex(Math.max(0, slideIndex - 1));
  };

  const handleNavForward = () => {
    setSlideIndex(Math.min(data.length - 1, slideIndex + 1));
  };

  const stepperProps = {
    thumbnails: data,
    activeIndex: slideIndex,
    Renderer: thumbnailRenderer,
    handleClick: handleThumbnailClick,
  };

  return (
    <ThemeProvider theme={isOnFullScreen ? sliderDarkTheme : appTheme}>
      <Grid data-test-id={'vip.slider-container'} container direction={'column'} alignItems={'center'} justify={'center'} ref={sliderRef}>
        <Grid item container className={classes.center}>
          <IconButton
            data-test-id={'vip.fs-btn'}
            aria-label="Toggle Full Screen"
            className={[classes.control, classes.fsToggleButton].join(' ')}
            onClick={handleToggleFullScreen}
          >
            {isOnFullScreen ? <FullscreenExit /> : <Fullscreen />}
          </IconButton>
          {!isMobile ? (
            <IconButton
              disabled={slideIndex === 0}
              aria-label="Previous Image"
              className={[classes.control, classes.navBack].join(' ')}
              onClick={handleNavBack}
            >
              <NavigateBefore />
            </IconButton>
          ) : null}
          <SwipeableViewsWithKeyboard
            slideStyle={{ cursor: isOnFullScreen ? 'default' : 'pointer' }}
            enableMouseEvents
            index={slideIndex}
            onChangeIndex={handleSwipe}
          >
            {data.map((sliderImageProps: ISliderImageProps) => (
              <SlideRenderer
                key={sliderImageProps.url}
                {...sliderImageProps}
                isMobile={isMobile}
                isOnFullScreen={isOnFullScreen}
                className={`${classes.slider} ${isOnFullScreen ? classes.fullScreen : ''}`}
                onSlideClick={goToFullScreen}
              />
            ))}
          </SwipeableViewsWithKeyboard>
          {!isMobile ? (
            <IconButton
              disabled={slideIndex === data.length - 1}
              aria-label="Next Image"
              className={[classes.control, classes.navForward].join(' ')}
              onClick={handleNavForward}
            >
              <NavigateNext />
            </IconButton>
          ) : null}
        </Grid>
        <Box>
          {showThumbnails && !isMobile ? (
            <ThumbnailsStepper {...stepperProps} />
          ) : (
            <MobileDotsStepper {...stepperProps} />
          )}
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

ImageSlider.defaultProps = { showThumbnails: true, width: 600, goToFullScreenOnClick: true };

export default ImageSlider;
