import { Theme, Typography } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import { IArticlePrice } from '../../../models/ArticlePrice';
import { BoxGrid } from '../../../shared/BoxComponents';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: lightBlue['900'],
    color: lightBlue['50'],
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
      <Typography variant={'caption'}>{props.price.net}</Typography>
    </BoxGrid>
  );
};

export default MobileNavBar;
