import 'babel-polyfill';
import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import * as ReactDOM from "react-dom";
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));
