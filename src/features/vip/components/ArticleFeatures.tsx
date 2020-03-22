import { Box } from '@material-ui/core';
import { Assignment } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { useAppStyles } from '../../../app/theme';
import { techAttributeIcons } from '../../../app/theme/icons';
import { BoxGrid } from '../../../shared/BoxComponents';
import BoxTypography from '../../../shared/BoxComponents/BoxTypography';
import { useIsMobile } from '../../../shared/utils/screen';

const ArticleFeatures: FunctionComponent<{ features: string[] }> = (props: {
  features: string[];
}) => {
  const appClasses = useAppStyles();
  const isMobile = useIsMobile();
  const features = props.features ?? [];

  const getIcon = (feature: string): React.ReactElement => {
    let Icon = Assignment;
    if (feature !== undefined && techAttributeIcons[feature] !== undefined) {
      Icon = techAttributeIcons[feature].icon;
    }

    return <Icon color={'inherit'} />;
  };

  return (
    <BoxGrid
      container
      alignItems={'center'}
      classes={{ root: appClasses.fadeBorder }}
      wrap={'wrap'}
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
        Features
      </BoxTypography>
      {features.map((feature: string) => (
        <BoxGrid
          key={feature}
          container
          item
          alignItems={'center'}
          xs={6}
          sm={4}
          spacing={2}
          borderBottom={1}
          pl={4}
          py={1}
          classes={{ root: appClasses.fadeBorder }}
          wrap={'nowrap'}
        >
          <BoxGrid item color={'secondary.dark'}>
            <Box mt={1} clone>{getIcon(feature)}</Box>
          </BoxGrid>
          <BoxTypography variant={'caption'}>
            {feature}
          </BoxTypography>
        </BoxGrid>
      ))}
    </BoxGrid>
  );
};

export default ArticleFeatures;
