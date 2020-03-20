import React, { FunctionComponent, ReactElement } from 'react';
import { IThumbnailProps } from '../../shared/ImageSlider';
import { useStyles } from './styles';

const Thumbnail: FunctionComponent<IThumbnailProps> = (props: IThumbnailProps): ReactElement => {
  const classes = useStyles();
  const classesName = `${classes.thumbnail} ${props.selected ? 'selected' : ''}`;

  return <img className={classesName} src={props.url} alt={props.caption} />;
};

export default Thumbnail;
