import React from "react";
import { Button } from '@material-ui/core';

export const MyButton = props => (
  <Button variant="contained" color="primary">
    {props.children}
  </Button>
);