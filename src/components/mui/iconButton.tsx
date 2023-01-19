import React from "react";
import { IconButton } from "@mui/material";

export default function IconButtonMUI(props: any) {
  const {
    children,
    onClick,
    ...other
  }: { children: React.ReactNode; onClick: any } = props;

  return (
    <IconButton
      sx={{ width: 40, height: 40, ...props.sx }}
      aria-label={props.label}
      onClick={onClick}
      {...other}
    >
      {children}
    </IconButton>
  );
}
