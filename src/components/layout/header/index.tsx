import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import useMediaQuery from "@mui/material/useMediaQuery";

import { AppToolbar, Label, Gap } from "../../../components";
import { PublicContext } from "../../../context";
import { DarkModeButton } from "../../../theme";
import LanguageButton from "../../../locales/button";

function HeaderComponent({ children }: { children: any }) {
  return (
    <header>
      <AppToolbar sx={{ height: 50, backgroundColor: "transparent" }}>
        {children}
      </AppToolbar>
    </header>
  );
}

export default function Header({ language }: any) {
  const { publicCtx }: any = React.useContext(PublicContext);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  return (
    <HeaderComponent>
      <>
        <div style={{ width: 35, marginRight: 10 }}>
          <StaticImage
            src="../../../static/images/icon.png"
            alt="Footballiga-Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Link to={`${process.env.GATSBY_URL}`}>
          <Label
            size="subtitle1"
            sx={{
              fontFamily: "Alegreya,serif",
              fontSize: isMobile ? 25 : 30,
              color: publicCtx.theme.background.isDark ? "white" : "black",
            }}
          >
            {process.env.GATSBY_COMPANY_NAME}
          </Label>
        </Link>
        <Gap />
        <LanguageButton language={language} sx={{ marginRight: "10px" }} />
        <DarkModeButton />
      </>
    </HeaderComponent>
  );
}
