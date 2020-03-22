import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import { IArticlePrice } from '../../../models/ArticlePrice';
import { BoxGrid } from '../../../shared/BoxComponents';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const MobileNavBar: FunctionComponent<{ title: string; price: IArticlePrice }> = (props: {
  title: string;
  price: IArticlePrice;
}) => {
  const classes = useStyles();

  return (
    <BoxGrid container direction={'column'} classes={{ root: classes.root }} p={2}>
      <Typography variant={'h4'}>{props.title}</Typography>
      <Typography variant={'caption'}>{props.price.grs.currency} {props.price.grs.amount}</Typography>
    </BoxGrid>
  );
};

export default MobileNavBar;
