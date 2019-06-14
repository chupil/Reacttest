import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="inherit" className={null}>
        Редагування досліджень
      </Typography>
      <Button color="inherit">Новий</Button>
    </Toolbar>
  </AppBar>
);
