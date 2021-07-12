import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';


function PublicRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>   
                <Route exact path={SLUGS.home} render={() => <div><h1>HOME</h1></div>} />          
                <Route exact path={SLUGS.loginWarden} render={() => <div>Login Warden</div>} />  
                <Route exact path={SLUGS.signupWarden} render={() => <div>Signup Warden</div>} />  
                <Route exact path={SLUGS.loginHosteller} render={() => <div>Login Hosteller</div>} />  
                <Route exact path={SLUGS.signupHosteller} render={() => <div>Signup Hosteller</div>} />  
                
                
                <Redirect to={SLUGS.home} />
            </Switch>
        </Suspense>
    );
}

export default PublicRoutes;
