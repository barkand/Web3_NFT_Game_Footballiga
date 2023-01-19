import React from "react";

import { PublicContext } from "../../../context";
import { Paper } from "../../../components";

function FooterComponent({ children }: any) {
  const { publicCtx } = React.useContext(PublicContext);

  return (
    <footer>
      <Paper
        shadow={1}
        sx={{
          textAlign: "center",
          bottom: 0,
          left: 0,
          right: 0,
          background: publicCtx.theme.background.isDark ? "#424750" : "default",
        }}
      >
        {children}
      </Paper>
    </footer>
  );
}

export default function Footer() {
  return (
    <FooterComponent>
      <div style={{ padding: "10px", color: "gray" }}>
        <p>{process.env.GATSBY_COPY_RIGHT}</p>
      </div>
    </FooterComponent>
  );
}
