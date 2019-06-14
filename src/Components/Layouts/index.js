import React from "react";
import { Grid } from "@material-ui/core";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

let pdddw = {
  pdddw: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default props => (
  <Grid container>
    <Grid item sm>
      <LeftPanel pdddw={pdddw} />
    </Grid>
    <Grid item sm>
      <RightPanel pdddw={pdddw} />
    </Grid>
  </Grid>
);
