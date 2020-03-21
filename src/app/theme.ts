import { createMuiTheme, Theme } from '@material-ui/core';
import { deepPurple, grey } from '@material-ui/core/colors';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';

export const appTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: grey,
      secondary: deepPurple,
    },
  })
);

export const useAppStyles = makeStyles((theme: Theme) => ({
  main: {
    maxWidth: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
}));
