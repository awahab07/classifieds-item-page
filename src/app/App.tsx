import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Vip from '../features/vip/components/Vip';
import { BoxGrid } from '../shared/BoxComponents';
import { appTheme, useAppStyles } from './theme';

const App: React.FC = (): React.ReactElement => {
  const classes = useAppStyles();

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline>
        <BoxGrid container classes={{root: classes.rootWrapper}} justify={'center'}>
          <BoxGrid className={classes.contentWrapper}>
            <Vip />
          </BoxGrid>
        </BoxGrid>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
