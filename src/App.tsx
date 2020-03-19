import { CssBaseline } from '@material-ui/core';
import React from 'react';
import './App.css';
import Vip from './features/vip/Vip';

const App: React.FC = (): React.ReactElement => {

  return (
    <>
      <CssBaseline>
        <div>
          <Vip/>
        </div>
      </CssBaseline>
    </>
  );
};

export default App;
