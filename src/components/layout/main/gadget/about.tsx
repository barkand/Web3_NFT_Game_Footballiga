import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Label } from "../../../";

export default function About() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  return (
    <div
      style={
        isMobile
          ? {
              paddingBottom: 70,
              paddingLeft: 20,
              paddingRight: 20,
            }
          : { paddingBottom: 70, paddingLeft: 200, paddingRight: 200 }
      }
    >
      <Label size="h6" sx={{ pb: 2 }}>
        {t("about1")}
      </Label>
      <Label size="h6" sx={{ pb: 2 }}>
        {t("about2")}
      </Label>
      <Label size="h6"> {t("about3")}</Label>
    </div>
  );
}
