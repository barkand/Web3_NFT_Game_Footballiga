import React from "react";
import { Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { PublicContext } from "../../../../context";
import { Background } from "../../../../theme";
import { Label, Button } from "../../../";

export default function Footer() {
  const { publicCtx }: any = React.useContext(PublicContext);
  const { t } = useTranslation();

  return (
    <div
      style={{
        paddingTop: 50,
        background: Background[publicCtx.theme.background.name].secondary,
      }}
    >
      <Label size="h4"> {t("footer")}</Label>
      <Button
        title={t("app")}
        type="contained"
        sx={{ mt: 5, mb: 10, background: "#fea413" }}
        component={Link}
        to={`${process.env.GATSBY_APP_URL}`}
      ></Button>
    </div>
  );
}
