import React, { Suspense} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

function WardenRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} render={() => <div>Dashboard Component</div>} />
                <Route exact path={SLUGS.requests} render={() => <div>Requests</div>} />
                
                
                <Route exact path={SLUGS.hostellers} render={() => <div>Hostellers</div>} />                
                <Route exact path={SLUGS.hostellersCreate} render={() => <div>Hosteller Create</div>} />
                <Route exact path={SLUGS.hostellersEdit} render={() => <div>Hosteller Edit</div>} />
                <Route exact path={SLUGS.hostellersView} render={() => <div>Hosteller View</div>} />

                <Route exact path={SLUGS.documents} render={() => <div>Documents</div>} />
                <Route exact path={SLUGS.documentCreate} render={() => <div>Document Create</div>} />                
                <Route exact path={SLUGS.documentsEdit} render={() => <div>Documents Edit</div>} />
                <Route exact path={SLUGS.documentsView} render={() => <div>Documents View</div>} />
                

                <Route exact path={SLUGS.noticeCreate} render={() => <div>Notice Create</div>} />
                <Route exact path={SLUGS.noticesView} render={() => <div>Notice View</div>} />
                <Route exact path={SLUGS.notices} render={() => <div>Notices</div>} />
                
                <Route exact path={SLUGS.queries} render={() => <div>Queries</div>} />
                <Route exact path={SLUGS.queriesView} render={() => <div>View Query</div>} />
                

                
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default WardenRoutes;
