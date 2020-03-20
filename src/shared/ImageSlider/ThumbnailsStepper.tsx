import { Box, ButtonBase } from '@material-ui/core';
import React, { Fragment, FunctionComponent } from 'react';
import { ISliderImageProps, IStepperProps } from './interfaces';

const ThumbnailsStepper: FunctionComponent<IStepperProps> = (props: IStepperProps) => {
  const { thumbnails, Renderer, activeIndex, handleClick } = props;

  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      flexWrap={'nowrap'}
      alignItems={'center'}
      justifyContent={'center'}
      overflow={'hidden'}
    >
      {' '}
      {thumbnails.map((slideProps: ISliderImageProps, thumbnailIndex: number) => (
        <Fragment key={slideProps.url}>
          <ButtonBase onClick={handleClick(thumbnailIndex)} centerRipple={false} focusRipple={true}>
            <Box p={1} mx={2} boxSizing={'borderBox'} clone>
              <Renderer
                url={slideProps.thumbnailUrl}
                caption={slideProps.caption}
                selected={thumbnailIndex === activeIndex}
              />
            </Box>
          </ButtonBase>
        </Fragment>
      ))}{' '}
    </Box>
  );
};

export default ThumbnailsStepper;
