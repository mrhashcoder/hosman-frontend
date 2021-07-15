import React, { Suspense} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

// Importing pages
import AllHostelles from 'pages/warden/AllHostelles';
import CreateHosteller from 'pages/warden/CreateHosteller';
import Requests from 'pages/warden/Requests';
import Queries from 'pages/warden/Queries';
import AllDocuments from 'pages/warden/AllDocuments';
import CreateDocument from 'pages/warden/CreateDocument';
import AllNotices from 'pages/warden/AllNotices';
import CreateNotice from 'pages/warden/CreateNotice';
import DashboardHome from 'pages/warden/DashboardHome';


function WardenRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} render={() => <div>Dashboard Component</div>} component={DashboardHome} />

                <Route exact path={SLUGS.requests} render={() => <div>Requests</div>} component={Requests} />                
                
                <Route exact path={SLUGS.hostellers} component ={AllHostelles} />                
                <Route exact path={SLUGS.hostellersCreate} component={CreateHosteller} />
                <Route exact path={SLUGS.hostellersEdit} render={() => <div>Hosteller Edit</div>} />
                <Route exact path={SLUGS.hostellersView} render={() => <div>Hosteller View</div>} />

                <Route exact path={SLUGS.documents} render={() => <div>Documents</div>} component={AllDocuments} />
                <Route exact path={SLUGS.documentCreate} render={() => <div>Document Create</div>} component={CreateDocument} />                
                <Route exact path={SLUGS.documentsEdit} render={() => <div>Documents Edit</div>} />
                <Route exact path={SLUGS.documentsView} render={() => <div>Documents View</div>} />
                
                <Route exact path={SLUGS.notices} render={() => <div>Notices</div>} component={AllNotices} />                
                <Route exact path={SLUGS.noticeCreate} render={() => <div>Notice Create</div>} component={CreateNotice} />
                <Route exact path={SLUGS.noticesView} render={() => <div>Notice View</div>} />
                
                <Route exact path={SLUGS.queries} render={() => <div>Queries</div>} component={Queries} />
                <Route exact path={SLUGS.queriesView} render={() => <div>View Query</div>} />
                

                
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default WardenRoutes;
