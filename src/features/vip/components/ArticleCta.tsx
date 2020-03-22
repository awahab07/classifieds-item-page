import { IconButton } from '@material-ui/core';
import { Call, Room } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { getAppSpacing, useAppStyles } from '../../../app/theme';
import { IArticlePrice } from '../../../models/ArticlePrice';
import { ISeller } from '../../../models/Seller';
import { BoxGrid } from '../../../shared/BoxComponents';
import { IBoxGridProps } from '../../../shared/BoxComponents';
import BoxTypography from '../../../shared/BoxComponents/BoxTypography';
import { getGMapQueryUrl } from '../../../shared/utils/maps';

const BoxCtaItem = (props: IBoxGridProps) => (
  <BoxGrid item container relative xs={4} alignItems={'center'} justify={'center'} {...props}>
    {props.children}
  </BoxGrid>
);

const ArticleCta: FunctionComponent<{ contact: ISeller; price: IArticlePrice }> = (props: {
  contact: ISeller;
  price: IArticlePrice;
}) => {
  const appClasses = useAppStyles();
  const phone = props.contact?.phones?.[0];
  const { price, contact } = props;

  return (
    <BoxGrid
      container
      direction={'row'}
      flexGrow={1}
      borderTop={0.5}
      height={getAppSpacing(10)}
      classes={{ root: appClasses.fadeBorder }}
    >
      <BoxCtaItem borderRight={1} className={appClasses.fadeBorder}>
        <IconButton
          key={phone.number}
          disabled={!phone.number}
          aria-label="View location on maps"
          component="a"
          href={getGMapQueryUrl(contact.latLong)}
          classes={{ root: appClasses.success }}
        >
          <Room />
        </IconButton>
      </BoxCtaItem>
      <BoxCtaItem borderRight={1} className={appClasses.fadeBorder} relative>
        <BoxTypography variant={'h4'} color={'primary.main'}>
          {price.net}
        </BoxTypography>
        <BoxTypography variant={'caption'} color={'warning.main'} fromBottom={getAppSpacing(1)}>
          {price.vat}% VAT
        </BoxTypography>
      </BoxCtaItem>
      <BoxGrid item container xs={4} alignItems={'center'} justify={'center'}>
        <BoxCtaItem color={'success.dark'}>
          <IconButton
            key={phone.number}
            disabled={!phone.number}
            aria-label="Call seller"
            component="a"
            href={`tel:${phone.number}`}
            classes={{ root: appClasses.success }}
          >
            <Call />
          </IconButton>
        </BoxCtaItem>
      </BoxGrid>
    </BoxGrid>
  );
};

export default ArticleCta;
