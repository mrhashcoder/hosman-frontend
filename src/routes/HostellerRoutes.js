import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';


function HostellerRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>             
                <Route exact path={SLUGS.profile} render={() => <div>Hostellers</div>} />  
                <Route exact path={SLUGS.noticeBoard} render={() => <div>Notice Board</div>} />  
                <Route exact path={SLUGS.query} render={() => <div>Query</div>} />  
                <Route exact path={SLUGS.bill} render={() => <div>Bill</div>} />  
                
                
                <Redirect to={SLUGS.profile} />
            </Switch>
        </Suspense>
    );
}

export default HostellerRoutes;
