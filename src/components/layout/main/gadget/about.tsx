import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Label } from "../../../";

export default function About() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        paddingBottom: 70,
        paddingLeft: 200,
        paddingRight: 200,
      }}
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
