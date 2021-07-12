import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PublicRoutes from 'routes/PublicRoutes';
import WardenSection from './WardenSection';
import HostellerSection from './HostellerSection';

function Routes() {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const isWardenAuth = true;
    const isHostellerAuth = false;

    if(isWardenAuth){
        return <WardenSection />
    }

    if(isHostellerAuth){
        return <HostellerSection />
    }

    return <PublicRoutes />;



}

export default Routes;
