import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import { App } from 'components/App';
import { AuthProvider } from 'components/Auth';
import { RouterProvider } from 'components/Router';

import { routes } from './routes';
import * as serviceWorker from './serviceWorker';
import './style/global.module.scss';

ReactDOM.render(
  <BrowserRouter>
    <RouterProvider routes={routes}>
      <AuthProvider>
        <Fabric>
          <App />
        </Fabric>
      </AuthProvider>
    </RouterProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
