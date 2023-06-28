import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function CartPopup() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ paddingLeft: 30 }}
        >
            <List>
                <ListItem className='cart-header-section' disablePadding>

                    <ListItemText className='cart-header uppercase' primary="Cart" />
                    <ListItemText className='cart-close-btn'>
                        <img
                           onClose={toggleDrawer("right", false)}
                            src="icons/close.png"
                            alt="close"
                            style={{
                                marginLeft: 20,
                                alignItems: "center",
                                height: "100%",
                                width: 28,
                                cursor: "pointer",
                            }}
                        />
                    </ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem className='cart-content' disablePadding>
                    {/* <ListItemButton>
                            
                        </ListItemButton> */}
                    <ListItemText className='cart-content-text' primary="Your cart is currently empty." />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={"right"}>
                <img
                    src="icons/cart.png"
                    alt="cart"
                    style={{ width: "19px" }}
                    onClick={toggleDrawer("right", true)}
                    className='cursor-pointer'
                />
                <SwipeableDrawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                    onOpen={toggleDrawer("right", true)}
                >
                    {list("right")}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}