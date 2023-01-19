import React from "react";

export default function BackGray() {
  return (
    <div
      style={{
        position: "absolute",
        right: "0",
        height: "100%",
        width: "100%",
        zIndex: "-10",
        borderRadius: "0 50px 0 0",
        transform: "skewY(-12deg)",
        background:
          "linear-gradient(to bottom,#f4f7fc 0,rgba(255,255,255,0) 70%)",
        transformOrigin: "top center",
        top: "200px",
      }}
    ></div>
  );
}
