import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    <Link to="/">
        <ListItem button>
        <ListItemIcon>
            <SettingsEthernetIcon />
        </ListItemIcon>
        <ListItemText primary="HOME" />
        </ListItem>
    </Link>
    <Link to="/about">
        <ListItem button>
        <ListItemIcon>
            <SettingsEthernetIcon />
        </ListItemIcon>
        <ListItemText primary="ABOUT" />
        </ListItem>
    </Link>
    </List>
    </div>
  );
  function Home() {
    return (
      <div>
        <h2>Home</h2>
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