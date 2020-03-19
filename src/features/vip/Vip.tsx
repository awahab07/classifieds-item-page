import { Grid } from '@material-ui/core';
import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
} from 'react';
import ImageSlider from '../../shared/ImageSlider';
const Vip: FunctionComponent = (props: PropsWithChildren<{}>): ReactElement => {
  return (
    <Grid
      container
      direction={'column'}
      justify={'center'}
      alignItems={'center'}
    >
      <ImageSlider>
        <img
          alt="test"
          src={
            'https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80'
          }
        />
      </ImageSlider>
    </Grid>
  );
};

export default Vip;
