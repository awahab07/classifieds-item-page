import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Vip from '../features/vip/components/Vip';
import { BoxGrid } from '../shared/BoxComponents';
import { appTheme, useAppStyles } from './theme';

const App: React.FC = (): React.ReactElement => {
  const classes = useAppStyles();

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline>
        <Router>
          <BoxGrid container classes={{ root: classes.rootWrapper }} justify={'center'}>
            <BoxGrid className={classes.contentWrapper}>
              <Switch>
                <Route path="/cars">
                  <Vip />
                </Route>
                <Redirect exact={true} from="/" to="/cars" />
              </Switch>
            </BoxGrid>
          </BoxGrid>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
