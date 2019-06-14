import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default props => (
  <Paper className={null}>
    <Tabs
      value={1}
      onChange={null}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
);
