import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  Edit as EditIcon,
  Home as HomeIcon,
  LogOut as LogOutIcon,
  Settings as SettingsIcon,
  Trello as TrelloIcon,
  User as UserIcon,
} from "react-feather";
import NavItem from "./NavItem";

const user = {
  avatar: "/static/logo.svg",
  jobTitle: "Supervisor",
  name: "Ronaldo Tunque",
};

const items = [
  {
    href: "/app/inicio",
    icon: HomeIcon,
    title: "Inicio",
  },
  {
    href: "/app/diagrama",
    icon: EditIcon,
    title: "Diagrama",
  },
  {
    href: "/app/perfil",
    icon: UserIcon,
    title: "Perfil",
  },
  {
    href: "/app/empresa",
    icon: TrelloIcon,
    title: "Empresa",
  },
  {
    href: "/app/configuracion",
    icon: SettingsIcon,
    title: "Configuración",
  },
  {
    href: "/login",
    icon: LogOutIcon,
    title: "Cerrar Sesión",
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
