import { Grid, IconButton, Theme } from '@material-ui/core';
import { green, lightBlue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Call, Room } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { IArticlePrice } from '../../../models/ArticlePrice';
import { ISeller } from '../../../models/Seller';
import { BoxGrid } from '../../../shared/BoxComponents';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.paper,
    color: lightBlue['50'],
  },
  cta: {
    color: green['900']
  }
}));

const MobileContact: FunctionComponent<{ contact: ISeller; price: IArticlePrice }> = (props: {
  contact: ISeller;
  price: IArticlePrice;
}) => {
  const classes = useStyles();
  const phone = props.contact?.phones?.[0];

  return (
    <BoxGrid container direction={'row'} classes={{ root: classes.root }} p={2}>
      <Grid item container xs={4} alignItems={'center'} justify={'center'}>
        <IconButton aria-label="View Location" className={classes.cta}>
          <Room />
        </IconButton>
      </Grid>
      <Grid item container xs={4} alignItems={'center'} justify={'center'}>
        <IconButton aria-label="View Location" className={classes.cta}>
          <Room />
        </IconButton>
      </Grid>
      <Grid item container xs={4} alignItems={'center'} justify={'center'}>
        <IconButton
          key={phone.number}
          disabled={!phone.number}
          aria-label="Call seller"
          component="a"
          href={`tel:${phone.number}`}
          className={classes.cta}
        >
          <Call />
        </IconButton>
      </Grid>
    </BoxGrid>
  );
};

export default MobileContact;
