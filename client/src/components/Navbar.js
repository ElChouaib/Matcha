import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import ChatIcon from '@material-ui/icons/Chat';
import AppsIcon from '@material-ui/icons/Apps';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'relative',
    marginBottom: theme.spacing(10),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
     
    }),
    backgroundColor:"#d81b60"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#DBDFF3"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  title : {
    flexGrow: 1,
  },
 
}));

function NavBar(props) {
  const {user, handleLogout} = props

  const loggedInMenu = [
    {"text" : "Browse","path" : "/browse", icon: <AppsIcon color="secondary"/>},
    {"text" : "Profile","path" : "/profile", icon: <PersonIcon color="secondary"/>},
    {"text" : "Activity","path" : "/activity", icon: <HistoryIcon color="secondary"/>},
    {"text" : "Friends","path" : "/chat", icon: <ChatIcon color="secondary"/>},
  ];
  const completeProfile = [
    {"text" : "Complete Profile", "path" : "/completeProfile", icon: <PersonIcon color="secondary"/>},
  ];
  const loggedOutMenu = [
    {"text" : "Se connecter","path" : "/login", icon: <LockOpenIcon color="secondary"/>},
    {"text" : "inscription","path" : "/register", icon: <LockOpenIcon color="secondary"/>},
  ];
  //let pathHome = user && user.complete === 3 ? '/home' : '/completeProfile';
  let menu = [];
  if(user && user.token)
  {
    if(user && user.complete === 3)
      menu = loggedInMenu;
    else
      menu = completeProfile;
  }
  else
    menu = loggedOutMenu;

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6"  color="secondary" className={classes.title}>
              <Link to="/home" style={{textDecoration: 'none', color:'white'}}>
                MATCHA
              </Link>
             
          </Typography>
          
          {user && user.token && <Button color="primary" onClick={handleLogout}>Logout</Button>}
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon color="primary"/> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menu.map((item) => (
            <Link to={item.path} style={{textDecoration: 'none', color:'primary'}} key={item.text}>
              <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
    </ClickAwayListener>
  );
}

export default NavBar;