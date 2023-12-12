import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// ** import pages **
import ProductPage from '../productpage/Product.js';
import CategoryPage from '../CategoryPage/Category.js';

const pages = ['Products', 'Category'];

const NavBar = () => {
    const [selectedTab, setSelectedTab] = React.useState(pages[0]);
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpenDrawer(open);
    };

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setOpenDrawer(false);
    };

    const renderContent = () => {
        switch (selectedTab) {
            case 'Products':
                return <ProductPage />
            case 'Category':
                return <CategoryPage />
            default:
                return null;
        }
    };

    return (
        <>
            <Grid container>
                <Grid item md={3} lg={3} xl={3}>
                    <Drawer
                        variant="permanent"
                        anchor="left"
                        open={openDrawer}
                        onClose={toggleDrawer(false)}
                    >
                        <div style={{ width: '250px' }}>
                            <List>
                                {pages.map((page) => (
                                    <ListItem
                                        button
                                        key={page}
                                        selected={selectedTab === page}
                                        onClick={() => handleTabClick(page)}
                                    >
                                        <ListItemText primary={page} />
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </Drawer>
                </Grid>
                <Grid item md={9} lg={9} xl={9}>
                    <Box ml={5}>
                        {renderContent()}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default NavBar;
