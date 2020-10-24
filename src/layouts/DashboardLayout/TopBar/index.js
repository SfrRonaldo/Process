import React from "react";
import { Link, Link as RouterLink } from "react-router-dom";
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
  Divider,
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
        <Divider
          orientation="vertical"
          flexItem
          style={{ marginLeft: 10, marginRight: 10 }}
        />
        <Hidden mdDown>
          <Button color="inherit" size="small">
            <EditIcon />{" "}
            <Link to="/app/diagrama" style={{ marginLeft: 5, color: "white" }}>
              Diagrama
            </Link>
          </Button>
        </Hidden>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <Button color="inherit" size="small">
            <HomeIcon />{" "}
            <Link to="/app/inicio" style={{ marginLeft: 5, color: "white" }}>
              Inicio
            </Link>
          </Button>{" "}
          <Button color="inherit" size="small">
            <UserIcon />{" "}
            <Link to="/app/perfil" style={{ marginLeft: 5, color: "white" }}>
              Perfil
            </Link>
          </Button>{" "}
          <Button color="inherit" size="small">
            <TrelloIcon />{" "}
            <Link to="/app/empresa" style={{ marginLeft: 5, color: "white" }}>
              Empresa
            </Link>
          </Button>{" "}
          <Button color="inherit" size="small">
            <SettingsIcon />{" "}
            <Link
              to="/app/configuracion"
              style={{ marginLeft: 5, color: "white" }}
            >
              Configuración
            </Link>
          </Button>{" "}
          <Button color="inherit" size="small">
            <LogOutIcon />{" "}
            <Link to="/" style={{ marginLeft: 5, color: "white" }}>
              Cerrar Sesión
            </Link>
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
