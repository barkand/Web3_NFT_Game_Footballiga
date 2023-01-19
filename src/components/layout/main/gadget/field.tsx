import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";

import { GridHeader, GridItem, Label, Button } from "../../..";
import { Background } from "../../../../theme";
import { PublicContext } from "../../../../context";

export default function MainField() {
  const { t } = useTranslation();
  const { publicCtx }: any = React.useContext(PublicContext);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  return (
    <>
      <GridItem xs={12} sx={{ mb: 15 }}>
        <div
          style={{
            background: Background[publicCtx.theme.background.name].secondary,
            transform: "rotate(-1deg)",
            borderRadius: "100px",
            width: isMobile ? "100% " : "80%",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            whiteSpace: "pre-line",
          }}
        >
          <GridHeader rowSpacing={5}>
            <GridItem md={6} xs={12}>
              <div style={{ marginTop: "-100px", marginBottom: "-50px" }}>
                <StaticImage
                  src="../../../../static/images/home/field.jpg"
                  alt="Football-Field"
                  style={{
                    width: "260px",
                    transform: "perspective(200px) rotate3d(15, 0, -22, 15deg)",
                  }}
                />
              </div>
            </GridItem>
            <GridItem md={6} xs={12}>
              <Label
                size="h5"
                sx={{
                  fontSize: isMobile ? 20 : 25,
                  lineHeight: isMobile ? "40px" : "55px",
                  mt: isMobile ? 10 : 0,
                  mb: 3,
                }}
              >
                {t("field")}
              </Label>
              <Button
                title={t("app")}
                sx={{ mb: 4, color: "#fea413", borderColor: "#fea413" }}
                type="outlined"
                size="large"
                component={Link}
                to={`${process.env.GATSBY_APP_URL}`}
              ></Button>
            </GridItem>
          </GridHeader>
        </div>
      </GridItem>
    </>
  );
}
