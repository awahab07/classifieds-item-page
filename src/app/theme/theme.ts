import { createMuiTheme, Theme } from '@material-ui/core';
import { blueGrey, grey, indigo } from '@material-ui/core/colors';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { SpacingArgument } from '@material-ui/core/styles/createSpacing';
import { fontFamily, primaryColor } from './contants';

export const appTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        ...indigo,
        main: primaryColor,
      },
      secondary: blueGrey
    },
    typography: {
      fontFamily,
    },
  })
);

export const fadeBorder = fade(appTheme.palette.secondary.light, 0.2);

export const useAppStyles = makeStyles((theme: Theme) => ({
  main: {
    maxWidth: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  fadeBorder: {
    borderColor: fadeBorder,
  },
  success: {
    color: theme.palette.success.dark
  },
  tag: {
    color: grey['800']
  },
  alter: {
    backgroundColor: grey['300'],
    opacity: 0.3
  }
}));

export const getAppSpacing = (spacingArg: SpacingArgument) => appTheme.spacing(spacingArg);
