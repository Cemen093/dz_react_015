import React from 'react';
import {colors} from "./constants";

const Cell = ({prop: {id, margin, length, player}, click, ...props}) => {
  const f = () => {
    if (!player)
      click(id)
  }

  return (
    <div
      {...props}
      onClick={f}
      id={id}
      style={{backgroundColor: colors[player], height: length, width: length+"px", margin: margin}}
    />
  );
};

export default Cell;