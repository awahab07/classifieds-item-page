import { Typography } from '@material-ui/core';
import { Assignment } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { getAppSpacing, useAppStyles } from '../../../app/theme';
import { techAttributeIcons } from '../../../app/theme/icons';
import { IArticleAttribute } from '../../../models/ArticleAttribute';
import { BoxGrid } from '../../../shared/BoxComponents';
import BoxTypography from '../../../shared/BoxComponents/BoxTypography';
import { useIsMobile } from '../../../shared/utils/screen';

const ArticleAttributes: FunctionComponent<{ attributes: IArticleAttribute[] }> = (props: {
  attributes: IArticleAttribute[];
}) => {
  const appClasses = useAppStyles();
  const isMobile = useIsMobile();
  const attributes = props.attributes ?? [];

  const getIcon = (attribute: IArticleAttribute): React.ReactElement => {
    let Icon = Assignment;
    if (attribute.tag !== undefined && techAttributeIcons[attribute.tag] !== undefined) {
      Icon = techAttributeIcons[attribute.tag].icon;
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
        Vehicle Information
      </BoxTypography>
      {attributes.map((attr: IArticleAttribute) => (
        <BoxGrid
          key={attr.tag}
          item
          container
          relative
          spacing={2}
          alignItems={'flex-start'}
          wrap={'nowrap'}
          overflow={'hidden'}
          xs={6}
          sm={4}
          pl={4}
          py={2}
          borderBottom={1}
          classes={{ root: appClasses.fadeBorder }}
        >
          <BoxGrid alignItems={'flex-start'} color={'secondary.dark'} py={1}>
            {getIcon(attr)}
          </BoxGrid>
          <BoxGrid
            item
            container
            direction={'column'}
            justify={'flex-start'}
            classes={{ root: appClasses.tag }}
            wrap={'nowrap'}
            height={getAppSpacing(8)}
          >
            <Typography variant={'caption'}>{attr.label}</Typography>
            <Typography variant={'subtitle2'}>{attr.value}</Typography>
          </BoxGrid>
        </BoxGrid>
      ))}
    </BoxGrid>
  );
};

export default ArticleAttributes;
