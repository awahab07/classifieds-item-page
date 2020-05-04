import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { hot } from 'react-hot-loader';
import 'typeface-roboto';
import Vip from '../features/vip/components/Vip';
import { appTheme, useAppStyles } from './theme';

const App: React.FC = (): React.ReactElement => {
  const classes = useAppStyles();

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline>
        <Box className={classes.main}>
          <Vip />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default hot(module)(App);
