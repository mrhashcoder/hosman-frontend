import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSubscription,
    IconTickets
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;
    async function logout() {
        push(SLUGS.loginWarden);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            <MenuItem
                id={SLUGS.requests}
                title='Requests'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.requests)}
            />
            <MenuItem
                id={SLUGS.hostellers}
                items={[SLUGS.hostellers, SLUGS.hostellersCreate]}
                title='Hostellers'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.hostellers}
                    title='All Hostellers'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.hostellers)}
                />
                <MenuItem
                    id={SLUGS.hostellersCreate}
                    title='Create'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.hostellersCreate)}
                />
            </MenuItem>

            <MenuItem
                id={SLUGS.queries}
                title='Queries'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.queries)}
            />

            <MenuItem
                id={SLUGS.documents}
                items={[SLUGS.documentCreate, SLUGS.documents]}
                title='Documents'
                icon={IconIdeas}
            >
                <MenuItem
                    id={SLUGS.documents}
                    title='All Documents'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.documents)}
                />
                <MenuItem
                    id={SLUGS.documentCreate}
                    title='Create'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.documentCreate)}
                />                
            </MenuItem>


            <MenuItem
                id={SLUGS.notices}
                items={[SLUGS.notices, SLUGS.noticeCreate]}
                title='Notice'
                icon={IconIdeas}
            >
                <MenuItem
                    id={SLUGS.notices}
                    title='All Notices'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.notices)}
                />
                <MenuItem
                    id={SLUGS.noticeCreate}
                    title='Create'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.noticeCreate)}
                />                
            </MenuItem>

            <div className={classes.separator}></div>

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;
