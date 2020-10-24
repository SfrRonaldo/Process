import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../../components/Logo/index";
import {
  Edit as EditIcon,
  Home as HomeIcon,
  LogOut as LogOutIcon,
  Settings as SettingsIcon,
  Trello as TrelloIcon,
  User as UserIcon,
} from "react-feather";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60,
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Hidden mdDown>
          <Button color="inherit" size="small">
            <EditIcon /> <span style={{ marginLeft: 5 }}>Diagrama</span>
          </Button>
        </Hidden>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <Button color="inherit" size="small">
            <HomeIcon /> <span style={{ marginLeft: 5 }}>Inicio</span>
          </Button>{" "}
          <Button color="inherit" size="small">
            <UserIcon /> <span style={{ marginLeft: 5 }}>Perfil</span>
          </Button>{" "}
          <Button color="inherit" size="small">
            <TrelloIcon /> <span style={{ marginLeft: 5 }}>Empresa</span>
          </Button>{" "}
          <Button color="inherit" size="small">
            <SettingsIcon />{" "}
            <span style={{ marginLeft: 5 }}>Configuración</span>
          </Button>{" "}
          <Button color="inherit" size="small" href="/">
            <LogOutIcon /> <span style={{ marginLeft: 5 }}>Cerrar Sesión</span>
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
