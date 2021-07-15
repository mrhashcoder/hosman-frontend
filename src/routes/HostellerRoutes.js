import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

// importing pages
import Profile from 'pages/hosteller/Profile';
import Notices from 'pages/hosteller/Notices';
import Query from 'pages/hosteller/Query';
import Bill from 'pages/hosteller/Bill';


function HostellerRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>             
                <Route exact path={SLUGS.profile} render={() => <div>Hostellers</div>} component={Profile} />  
                <Route exact path={SLUGS.noticeBoard} render={() => <div>Notice Board</div>} component={Notices} />  
                <Route exact path={SLUGS.query} render={() => <div>Query</div>} component={Query} />  
                <Route exact path={SLUGS.bill} render={() => <div>Bill</div>} component={Bill} />  
                
                
                <Redirect to={SLUGS.profile} />
            </Switch>
        </Suspense>
    );
}

export default HostellerRoutes;
