import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./assets/globalStyle";
import theme from "./theme/index.js";
import routes from "./routes.js";

const App = () => {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
