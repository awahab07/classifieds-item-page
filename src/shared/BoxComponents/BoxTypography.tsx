import { Typography, TypographyProps } from '@material-ui/core';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import BoxGrid, { IBoxGridProps } from './BoxGrid';

interface IBoxTypographyProps extends PropsWithChildren<IBoxGridProps & TypographyProps> {}

const BoxTypography: FunctionComponent<IBoxTypographyProps> = (props: IBoxTypographyProps) => {
  return (
    <BoxGrid {...props}>
      <Typography variant={props.variant} gutterBottom={props.gutterBottom}>{props.children}</Typography>
    </BoxGrid>
  );
};

export default BoxTypography;
