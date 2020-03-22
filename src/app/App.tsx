import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
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

export default App;
