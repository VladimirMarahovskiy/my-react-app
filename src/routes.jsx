import React from 'react';

import { Route } from 'react-router-dom';

import DashboardContainer from "./js/components/page/DashboardContainer.jsx";
import PageContainer from "./js/components/page/PageContainer.jsx";
import HomeContainer from "./js/components/page/HomeContainer.jsx";

export default (
    <Route path='/' component={HomeContainer}>
        <Route path='/dash' component={DashboardContainer} />
        <Route path='/page' component={PageContainer} />

    </Route>
);