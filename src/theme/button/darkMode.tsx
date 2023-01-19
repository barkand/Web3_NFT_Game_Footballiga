import React from "react";

import { PublicContext } from "../../context";
import { IconButton } from "../../components";
import {
  Brightness4 as MoonIcon,
  Brightness7 as SunIcon,
} from "@mui/icons-material";
import useTheme from "../hook/use-theme";

export default function DarkMode() {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);

  const { background, loading }: any = useTheme();
  const [newMode, setNewMode] = React.useState(publicCtx.theme.background.name);
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (loading === false && newMode !== background) setNewMode(background);
  }, [background]);

  React.useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      return;
    }

    let newIsDark: boolean = newMode === "dark";

    setPublicCtx({
      ...publicCtx,
      theme: {
        ...publicCtx.theme,
        background: {
          name: newMode,
          isDark: newIsDark,
        },
      },
    });

    if (typeof window !== "undefined")
      localStorage.setItem("background", newMode);
  }, [newMode]);

  return (
    <IconButton
      onClick={() =>
        setNewMode(publicCtx.theme.background.isDark ? "light" : "dark")
      }
    >
      {publicCtx.theme.background.isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
