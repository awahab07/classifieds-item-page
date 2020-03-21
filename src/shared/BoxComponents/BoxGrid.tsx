import { Box, BoxProps, Grid, GridProps } from '@material-ui/core';
import React, { FunctionComponent, PropsWithChildren } from 'react';

interface IBoxGridProps extends PropsWithChildren<BoxProps & GridProps> {}

const BoxGrid: FunctionComponent<IBoxGridProps> = (props: IBoxGridProps) => {
  return (
    <Box {...props} component={Grid}>
      {props.children}
    </Box>
  );
};

export default BoxGrid;
