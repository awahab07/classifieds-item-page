import React, { FunctionComponent } from 'react';
import { useAppStyles } from '../../../app/theme';
import { BoxGrid } from '../../../shared/BoxComponents';
import BoxTypography from '../../../shared/BoxComponents/BoxTypography';
import { useIsMobile } from '../../../shared/utils/screen';

const ArticleDescription: FunctionComponent<{ description: string }> = (props: {
  description: string;
}) => {
  const appClasses = useAppStyles();
  const isMobile = useIsMobile();

  return (
    <BoxGrid
      container
      alignItems={'center'}
      classes={{ root: appClasses.fadeBorder }}
      p={isMobile ? 0 : 2}
    >
      <BoxTypography
        item
        xs={12}
        px={3}
        pt={4}
        pb={2}
        variant={'h5'}
        borderBottom={2}
        classes={{ root: appClasses.fadeBorder }}
      >
        Description
      </BoxTypography>
      <BoxTypography
        item
        xs={12}
        px={3}
        py={1}
        variant={isMobile ? 'body2' : 'body1'}
        borderBottom={1}
        classes={{ root: appClasses.fadeBorder }}
      >
        {props.description}
      </BoxTypography>
    </BoxGrid>
  );
};

export default ArticleDescription;
