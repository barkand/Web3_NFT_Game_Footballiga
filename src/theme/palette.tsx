import React from "react";

import { PublicContext } from "../context";
import { Theme } from "./components";
import { Background } from "./libs/colors";

export default function ThemeComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);

  const selectedTheme = {
    palette: {
      mode: publicCtx.theme.background.name,
      background: {
        default: Background[publicCtx.theme.background.name].primary,
      },
    },
  };

  return <Theme theme={selectedTheme}>{children}</Theme>;
}
