import React from "react";

export default function RightOrange() {
  return (
    <div
      style={{
        background:
          "linear-gradient(-35deg, rgb(255, 165, 0) 0px, rgb(255, 82, 0) 100%)",
        height: "280px",
        width: "270px",
        borderRadius: "50px 0px 0px 0px",
        transform: "rotate(-36deg)",
        transformOrigin: "right top",
        top: "15px",
        right: "-55px",
        position: "absolute",
        zIndex: "-1",
      }}
    ></div>
  );
}
