import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import { Router } from 'react-router-dom';
import App from "App";
import { Provider } from 'react-redux';
import Store from './store/store';
import history from 'store/redirect/history'

// Integra Nock Context Provider
import { MaterialUIControllerProvider } from "context";

ReactDOM.render(

  <Provider store={Store}>
    {/* <Router history={history} > */}
      <BrowserRouter>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </BrowserRouter>
    {/* </Router> */}
  </Provider>,
  document.getElementById("root")
);
