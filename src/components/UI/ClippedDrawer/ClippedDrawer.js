import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import StarIcon from '@material-ui/icons/Star';
import { FcBookmark } from "react-icons/fc";
import { NavLink } from 'react-router-dom';


const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingTop: "80px"

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,
    zIndex: 0
  },
  drawerPaper: {
    width: drawerWidth,
    top: "auto",
    marginTop: "10px"
  },
  content: {
    flexGrow: 1,
    alignItems: 'left',
    padding: theme.spacing(3),
    fontSize: 15,
    fontStyle: 'bold'
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {props.categories.map((text, index) => (
            <ListItem button component={NavLink} to={`/vendors/${text}`} key={text}>
              <ListItemIcon><FcBookmark /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          {props.children}
        </div>
      </main>
    </div>
  );
}