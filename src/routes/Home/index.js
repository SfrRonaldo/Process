import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Page from "../../components/Page/index";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import CssBaseline from "@material-ui/core/CssBaseline";

const drawerWidth = 240;
const drawerTop = 64;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 500,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    height: drawerTop,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: drawerTop,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Page title="Inicio">
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.appBar}></div>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawPaper }}
        >
          <div className={classes.drawerContainer}>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </div>
        </Drawer>
      </div>
    </Page>
  );
}
