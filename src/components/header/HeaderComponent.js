import React, { useContext } from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarContext } from 'hooks/useSidebar';
import SLUGS from 'resources/slugs';

const useStyles = createUseStyles((theme) => ({
    avatar: {
        height: 35,
        width: 35,
        minWidth: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        '@media (max-width: 768px)': {
            marginLeft: 14
        }
    },
    container: {
        height: 40
    },
    name: {
        ...theme.typography.itemTitle,
        textAlign: 'right',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: `1px solid ${theme.color.lightGrayishBlue2}`,
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 14,
            marginRight: 0
        }
    },
    title: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: 50
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
}));

function HeaderComponent() {
    const { currentItem } = useContext(SidebarContext);
    const theme = useTheme();
    const classes = useStyles({ theme });

    let title;
    switch (true) {
        case currentItem === SLUGS.dashboard:
            title = 'Dashboard';
            break;
        case [SLUGS.hostellers, SLUGS.hostellersCreate, SLUGS.hostellersEdit , SLUGS.hostellersView].includes(currentItem):
            title = 'Hostellers';
            break;
        case currentItem === SLUGS.requests:
            title = 'Request';
            break;
        case [SLUGS.queries, SLUGS.queriesView].includes(currentItem):
            title = 'Queries';
            break;

        case [SLUGS.noticeCreate, SLUGS.notices , SLUGS.noticesView].includes(currentItem):
            title = 'Notices';
            break;
        
        case [SLUGS.documentCreate, SLUGS.documents , SLUGS.documentsEdit , SLUGS.documentsView].includes(currentItem):
            title = 'Documents';
            break;
        
            
        case currentItem === SLUGS.settings:
            title = 'Settings';
            break;
        default:
            title = '';
    }


    return (
        <Row className={classes.container} vertical='center' horizontal='space-between'>
            <span className={classes.title}>{title}</span>
            <Row vertical='center'>
                
            </Row>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
