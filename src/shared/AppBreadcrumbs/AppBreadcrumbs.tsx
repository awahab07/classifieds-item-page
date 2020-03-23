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
      {urlSegments.map((segment: string, index: number) =>
        segment !== undefined ? (
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
        ) : null
      )}

      {props.currentUrlSegment !== undefined ? (
        <Link
          color="inherit"
          href={`${urlSegments.join('/')}/${props.currentUrlSegment}`}
          component={'a'}
        >
          <BoxTypography variant={'caption'} color={'secondary.dark'}>
            {props.currentUrlSegment}
          </BoxTypography>
        </Link>
      ) : null}
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;
