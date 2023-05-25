import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import useStyles from "./styles.js";

const List = () => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4">SpeakEasy bar around you</Typography>

      <FormControl className={classes.formControl}>
        <InputLabel id="type">Type</InputLabel>
        <Select id="type" value={""} onChange={""}>
          <MenuItem value="speakeasy">SpeakEasy bar</MenuItem>
          <MenuItem value="rooftop">Rooftop</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
