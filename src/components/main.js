import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './home';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MainPanel() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    <List>
        <ListItem button onClick={ToHome}>
        <ListItemIcon>
            <SettingsEthernetIcon />
        </ListItemIcon>
        <ListItemText primary="HOME" />
        </ListItem>
        <ListItem button onClick={ToAbout}>
        <ListItemIcon>
            <SettingsEthernetIcon />
        </ListItemIcon>
        <ListItemText primary="ABOUT" />
        </ListItem>
    </List>
    </div>
  );
  function ToHome(){
    window.location.replace("/")
  }
  function ToAbout(){
    window.location.replace("/about")
  }
  function Home() {
    return (
      <div>
          <HomePage />
      </div>
    );
  }
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  return (
    <div>
    <SwipeableDrawer
    open={state.left}
    onClose={toggleDrawer('left', false)}
    onOpen={toggleDrawer('left', true)}
    >
    {sideList('left')}
    </SwipeableDrawer>
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </Router>
    </div>
  );
}