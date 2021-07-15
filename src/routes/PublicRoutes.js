import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

// Importing Paeges
import Home from 'pages/public/Home';
import LoginWarden from 'pages/public/LoginWarden';
import SignupWarden from 'pages/public/SignupWarden';
import LoginHosteller from 'pages/public/LoginHosteller';
import SignupHosteller from 'pages/public/SignupHosteller';



function PublicRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>   
                <Route exact path={SLUGS.home} component={Home} />          
                <Route exact path={SLUGS.loginWarden} component={LoginWarden} />  
                <Route exact path={SLUGS.signupWarden} component={SignupWarden} />  
                <Route exact path={SLUGS.loginHosteller} component={LoginHosteller} />  
                <Route exact path={SLUGS.signupHosteller} component={SignupHosteller} />  
                
                
                <Redirect to={SLUGS.home} />
            </Switch>
        </Suspense>
    );
}

export default PublicRoutes;
