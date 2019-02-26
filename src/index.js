import React from "react";
import ReactDom from "react-dom";

import {Router, Route, Link} from 'react-router-dom';

import style from "./css.jsx";
import routes from "./routes.jsx";
import history from './history.jsx';

import HomeContainer from "./js/components/page/HomeContainer.jsx";
import DashboardContainer from "./js/components/page/DashboardContainer.jsx";
import PageContainer from "./js/components/page/PageContainer.jsx";
import Header from "./js/components/header/Header.jsx";

ReactDom.render(
    <div>
        <Header/>

        <Router history={history} routes={routes}>
            <div>
                <Route exact path="/" component={HomeContainer} />
                <Route  path="/dash" component={DashboardContainer} />
                <Route  path="/page" component={PageContainer} />
            </div>
        </Router>
    </div>,

    document.getElementById('app'),
);