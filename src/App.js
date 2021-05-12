import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import { Container } from '@material-ui/core';
import EnhancedTable from './components/table';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  const menuItems = [
    {
      text: 'Overview',
      icon: <HomeOutlinedIcon />,
      path: '/'
    },
    {
      text: 'Tasks',
      icon: <CheckBoxOutlinedIcon />,
      path: '/tasks'
    },
    {
      text: 'Files',
      icon: <AttachFileOutlinedIcon />,
      path: '/files'
    },
    {
      text: 'Patients',
      icon: <PersonOutlineOutlinedIcon />,
      path: '/patients'
    },
    {
      text: 'Reports',
      icon: <BookmarksOutlinedIcon />,
      path: '/reports'
    },
    {
      text: 'Archive',
      icon: <LibraryBooksOutlinedIcon/>,
      path: '/archive'
    },
  ]


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            St. Mary Hospital
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {menuItems.map(item => (
              <ListItem
               button
               key={item.text}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
          <Container>
            <EnhancedTable />
          </Container>
      </main>
    </div>
  );
}
