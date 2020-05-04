import { Box, BoxProps, Typography, TypographyProps } from '@material-ui/core';
import React, { FunctionComponent, PropsWithChildren } from 'react';

interface IBoxTypographyProps extends PropsWithChildren<BoxProps & TypographyProps> {}

const BoxTypography: FunctionComponent<IBoxTypographyProps> = (props: IBoxTypographyProps) => {
  return (
    <Box {...props}>
      <Typography variant={props.variant}>{props.children}</Typography>
    </Box>
  );
};

export default BoxTypography;
