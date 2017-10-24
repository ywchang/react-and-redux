import 'babel-polyfill';
import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import * as ReactDOM from "react-dom";
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";


const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
