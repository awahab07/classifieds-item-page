import { Breadcrumbs, Link } from '@material-ui/core';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import BoxTypography from '../BoxComponents/BoxTypography';

interface IBreadCrumbsProps {
  parentUrl: string;
  currentUrlSegment: string;
}

const AppBreadcrumbs: FunctionComponent<PropsWithChildren<IBreadCrumbsProps>> = (
  props: PropsWithChildren<IBreadCrumbsProps>
) => {
  const urlSegments = props.parentUrl.split('/');

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={'>'}>
      {urlSegments.map((segment: string, index: number) => (
        <Link
          key={segment}
          color="inherit"
          href={`${urlSegments.slice(0, index + 1).join('/')}`}
          component={'a'}
        >
          <BoxTypography variant={'caption'} color={'secondary.main'}>
            {segment}
          </BoxTypography>
        </Link>
      ))}

      <Link
        color="inherit"
        href={`${urlSegments.join('/')}/${props.currentUrlSegment}`}
        component={'a'}
      >
        <BoxTypography variant={'caption'} color={'secondary.dark'}>
          {props.currentUrlSegment}
        </BoxTypography>
      </Link>
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;
