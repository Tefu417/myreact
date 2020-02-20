import React from "react";

const ColorfulMsg = (props: any) => {
  return <p style={{ color: props.color }}>{props.children}</p>
};

export default ColorfulMsg;
