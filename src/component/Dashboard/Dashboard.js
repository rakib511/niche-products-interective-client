
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyOrder from '../MyOrder/MyOrder';
import AddData from '../AddData/AddData';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import SendRevew from '../Revew/SendRevew';
import useAuth from '../hooks/useAuth'
import Payment from '../Payment/Payment'

import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

const drawerWidth = 240;

function Dashborard(props) {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin} = useAuth()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
          <ListItem button>
            <Link to={url}>MyOrder</Link>
          </ListItem>
      </List>
      {admin && <Box>
        <List>
          <ListItem button>
            <Link to={`${url}/addData`}>AddData</Link>
          </ListItem>
      </List>
      <List>
          <ListItem button>
            <Link to={`${url}/makeAdmin`}>makeAdmin</Link>
          </ListItem>
      </List> 
        </Box>}
      <List>
          <ListItem button>
            <Link to={`${url}/addRevew`}>AddRevew</Link>
          </ListItem>
      </List>
      <List>
          <ListItem button>
            <Link to={`${url}/pay`}>Pay</Link>
          </ListItem>
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           User Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
            <Route exact path={path}>
            <MyOrder></MyOrder>
            </Route>
            <Route path={`${path}/addData`}>
            <AddData></AddData>
            </Route>
            <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addRevew`}>
            <SendRevew></SendRevew>
            </Route>
            <Route path={`${path}/pay`}>
            <Payment></Payment>
            </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashborard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashborard;