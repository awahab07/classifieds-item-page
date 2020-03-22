import { AccountCircle } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { getAppSpacing, useAppStyles } from '../../../app/theme';
import { ISeller } from '../../../models/Seller';
import { BoxGrid } from '../../../shared/BoxComponents';
import BoxTypography from '../../../shared/BoxComponents/BoxTypography';
import { useIsMobile } from '../../../shared/utils/screen';

const SellerInfo: FunctionComponent<{ contact: ISeller }> = (props: { contact: ISeller }) => {
  const appClasses = useAppStyles();
  const isMobile = useIsMobile();
  const { contact } = props;

  return (
    <BoxGrid
      container
      alignItems={'center'}
      borderTop={0.5}
      classes={{ root: appClasses.fadeBorder }}
      wrap={'nowrap'}
      p={isMobile ? 0 : 2}
    >
      <BoxGrid
        color={'info.light'}
        p={isMobile ? 2 : 0}
        mx={isMobile ? 0 : 2}
        fontSize={getAppSpacing(isMobile ? 4 : 6)}
      >
        <AccountCircle fontSize={'inherit'} />
      </BoxGrid>
      <BoxGrid container direction={'column'} justify={'flex-end'}>
        <BoxTypography variant={isMobile ? 'subtitle2' : 'h5'} color={'primary.dark'}>
          {contact.name}
        </BoxTypography>
        <BoxTypography variant={'caption'} color={'secondary'} gutterBottom={!isMobile}>
          {contact.address1}, {contact.address2} - {contact.country}
        </BoxTypography>
        {!isMobile ? (
          <BoxTypography variant={'body1'} color={'secondary.main'} my={2}>
            {contact.imprint}
          </BoxTypography>
        ) : null}
      </BoxGrid>
      <BoxGrid width={1 / 2}>
        <BoxGrid color={'secondary.dark'}>
          <BoxTypography variant={'caption'} color={'info.dark'} textAlign={'center'}>
            {contact.withMobileSince}
          </BoxTypography>
        </BoxGrid>
      </BoxGrid>
    </BoxGrid>
  );
};

export default SellerInfo;
