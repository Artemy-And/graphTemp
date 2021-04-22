import * as React from 'react';
import * as ReactDOM from "react-dom";

import {AppMain} from './AppMain';
import "./styles.css";
import {Provider} from "react-redux";
import {store} from "./components/state/Store";

var mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <AppMain/>
    </Provider>
    , mountNode);
