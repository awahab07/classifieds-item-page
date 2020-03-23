import { IconButton, Typography } from '@material-ui/core';
import { Call, Room } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { useAppStyles } from '../../../app/theme';
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

const Address: FunctionComponent<{ contact: ISeller }> = (props: { contact: ISeller }) => {
  const { contact } = props;

  return (
    <BoxGrid
      container
      fontSize={'h6.fontSize'}
      color={'secondary.dark'}
      alignItems={'center'}
      px={4}
    >
      <BoxTypography alignItems={'center'} variant={'h6'}>{contact.address1},</BoxTypography>
      <BoxTypography alignItems={'center'} variant={'h6'}>{contact.address2},</BoxTypography>
      <BoxTypography alignItems={'center'} variant={'h6'}>{contact.country}</BoxTypography>
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

const Price: FunctionComponent<{ price: IArticlePrice }> = (props: { price: IArticlePrice }) => {
  const { price } = props;

  return (
    <BoxGrid
      item
      xs={4}
      container
      direction={'column'}
      alignItems={'flex-end'}
      spacing={2}
      p={4}
      px={1.5}
    >
      <BoxTypography variant={'h4'} color={'success.dark'}>
        {price.net}
      </BoxTypography>
      <Typography variant={'caption'}>({price.vat}% vat) - Gross: {price.grs.currency} {price.grs.amount}</Typography>
    </BoxGrid>
  );
};

const VipHeader: FunctionComponent<IVipHeaderProps> = (props: IVipHeaderProps) => {
  const { title, price, contact } = props;
  const appClasses = useAppStyles();

  return (
    <BoxGrid container borderColor={'primary.dark'} borderBottom={1} classes={{root: appClasses.headerBorder}}>
      <BoxGrid item container direction={'column'} xs={8}>
        <BoxTypography container variant={'h4'} color={'primary.main'} p={4} pb={0}>
          {title}
        </BoxTypography>
        <Address contact={contact} />
      </BoxGrid>
      <Price price={price} />
    </BoxGrid>
  );
};

export default VipHeader;
