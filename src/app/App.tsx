import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import 'typeface-roboto';
import Vip from '../features/vip/components/Vip';
import { appTheme, useAppStyles } from './theme';

const App: React.FC = (): React.ReactElement => {
  const classes = useAppStyles();

  return (
    <CssBaseline>
      <ThemeProvider theme={appTheme}>
        <Box className={classes.main}>
          <Vip />
        </Box>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
