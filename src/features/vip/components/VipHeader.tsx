import { Grid, IconButton, Theme, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Call, Room } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { IArticlePrice } from '../../../models/ArticlePrice';
import { ISeller, ISellerPhone, SellePhoneType } from '../../../models/Seller';
import { BoxGrid } from '../../../shared/BoxComponents';
import BoxTypography from '../../../shared/BoxComponents/BoxTypography';
import { getGMapQueryUrl } from '../../../shared/utils/maps';

export interface IVipHeaderProps {
  contact: ISeller;
  title: string;
  price: IArticlePrice;
}

const useStyles = makeStyles((theme: Theme) => ({
  price: {
    color: green['900'],
    fontWeight: 500
  },
  secondary: {
    margin: 0,
  },
}));

const Title: FunctionComponent<{ title: string }> = (props: {
  title: string;
}) => {
  return (
    <BoxGrid item container xs={12}>
      <Typography variant={'h3'}>{props.title}</Typography>
    </BoxGrid>
  );
};

const Address: FunctionComponent<{ contact: ISeller }> = (props: {
  contact: ISeller;
}) => {
  const classes = useStyles();
  const { contact } = props;

  return (
    <BoxGrid
      item
      container
      direction={'row'}
      spacing={1}
      fontSize={'h6.fontSize'}
      alignItems={'center'}
      className={classes.secondary}
      xs={6}
      color={'primary.main'}
    >
      <Typography variant={'h6'}>{contact.address1}</Typography>,
      <Typography variant={'h6'}>{contact.country}</Typography>
      <IconButton
        disabled={isNaN(contact.latLong?.lat)}
        aria-label="View on maps"
        component="a"
        href={getGMapQueryUrl(contact.latLong)}
      >
        <Room />
      </IconButton>
      {contact.phones.map((phone: ISellerPhone) =>
        phone.type === SellePhoneType.PHONE1 ? (
          <IconButton
            key={phone.number}
            disabled={!phone.number}
            aria-label="Call seller"
            component="a"
            href={`tel:${phone.number}`}
          >
            <Call />
          </IconButton>
        ) : null
      )}
    </BoxGrid>
  );
};

const Price: FunctionComponent<{ price: IArticlePrice }> = (props: {
  price: IArticlePrice;
}) => {
  const classes = useStyles();
  const { price } = props;

  return (
    <BoxGrid
      item
      container
      flexGrow={1}
      direction={'row'}
      justify={'flex-end'}
      alignItems={'baseline'}
      wrap={'nowrap'}
      spacing={2}
      p={0.8}
      xs={6}
    >
      <Typography variant={'caption'}>
        ({price.vat}% vat)
      </Typography>
      <BoxTypography variant={'h2'} className={classes.price}>{price.net}</BoxTypography>
    </BoxGrid>
  );
};

const VipHeader: FunctionComponent<IVipHeaderProps> = (props: IVipHeaderProps) => {
  const classes = useStyles();
  const { title, price, contact } = props;

  return (
    <Grid
      container={true}
    >
      <Title title={title}/>
      <Address contact={contact}/>
      <Price key="price" price={price}/>
    </Grid>
  );
};

export default VipHeader;
