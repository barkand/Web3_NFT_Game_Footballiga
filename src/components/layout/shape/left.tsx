import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { PublicContext } from "../../../context";
import { Background } from "../../../theme";

export default function LeftGray() {
  const { publicCtx } = React.useContext(PublicContext);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  return (
    <div
      style={{
        background: isMobile
          ? Background[publicCtx.theme.background.name].secondary
          : "linear-gradient(-35deg, rgb(255, 165, 0) 0px, rgb(255, 82, 0) 100%)",
        height: "580px",
        width: "270px",
        borderRadius: "0 0 50px 0",
        transform: "rotate(-20deg)",
        transformOrigin: "left bottom",
        top: "200px",
        left: "-55px",
        position: "absolute",
        zIndex: "-1",
      }}
    ></div>
  );
}
