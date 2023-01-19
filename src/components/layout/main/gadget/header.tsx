import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";

import { GridHeader, GridItem, Label } from "../../..";
import Tilt from "../../../effect/tilt";

export default function MainHeader({ language }: any) {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  return (
    <>
      <GridItem xs={12} sx={{ mb: 15 }}>
        <div
          style={
            isMobile
              ? { display: "flex", marginLeft: "1%", marginRight: "1%" }
              : { display: "flex", marginLeft: "10%", marginRight: "10%" }
          }
        >
          <GridHeader rowSpacing={10}>
            <GridItem md={6} xs={12} sx={{ fontWeight: "700" }}>
              <Label
                variant={"h1"}
                sx={{
                  fontSize: isMobile ? "45px" : "76px",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                {t("name")}
              </Label>
              <Label
                variant={"h1"}
                sx={{
                  fontSize: isMobile ? "20px" : "30px",
                  lineHeight: isMobile ? "40px" : "70px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  whiteSpace: "pre-line",
                }}
              >
                {t("description1")}
              </Label>
            </GridItem>
            <GridItem md={6} xs={12} sx={{ mt: { md: 10, xs: 0 } }}>
              <div
                style={{
                  height: isMobile ? "350px" : "430px",
                  width: isMobile ? "350px" : "430px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: "50%",
                  boxShadow: "rgb(86, 154, 255) 0px 0px 70px 40px",
                  zIndex: -1,
                }}
              >
                <Tilt>
                  <StaticImage
                    src="../../../../static/images/home/top.png"
                    alt="top-Image"
                    style={
                      language === "fa" ? { transform: "rotateY(180deg)" } : {}
                    }
                  />
                </Tilt>
              </div>
            </GridItem>
          </GridHeader>
        </div>
      </GridItem>
    </>
  );
}
