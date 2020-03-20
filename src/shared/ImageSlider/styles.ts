import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IImageSliderProps } from './interfaces';

const gutter = (theme: Theme) => (props: IImageSliderProps) => props.isMobile ? 0 : theme.spacing(1);

const useStyles = makeStyles((theme: Theme) => {
  return {
    slider: {
      width: (props: IImageSliderProps) => (props.isMobile ? '100vw' : props.width),
    },
    fullScreen: {
      width: (props: IImageSliderProps) => (props.isMobile ? '100vw' : 'auto'),
      maxWidth: (props: IImageSliderProps) => (props.isMobile ? '100vw' : `100vw`),
    },
    pointer: {
      cursor: 'pointer',
    },
    center: {
      textAlign: 'center',
      position: 'relative',
    },
    control: {
      position: 'absolute',
      color: theme.palette.grey[800],
      zIndex: 100,
      backgroundOpacity: 0.4
    },
    fsToggleButton: {
      right: gutter(theme),
      top: gutter(theme),
    },
    navBack: {
      left: gutter(theme),
      top: '50%',
    },
    navForward: {
      right: gutter(theme),
      top: '50%',
    },
  };
});

export default useStyles;
