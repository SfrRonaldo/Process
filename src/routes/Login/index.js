import React from "react";
import { makeStyles } from "@material-ui/core";
import Page from "../../components/Page/index.js";
import LoginForm from "./LoginForm/index.js";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    backgroundImage: "url(static/bf.jpg)",
    backgroundSize: "auto",
    height: "100%",
    paddingBottom: theme.spacing(10),
    paddingTop: theme.spacing(3),
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Login">
      <LoginForm />
    </Page>
  );
}
