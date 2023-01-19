import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { PublicContext } from "../../../../context";
import { GridHeader, GridItem, Label } from "../../..";
import { Background } from "../../../../theme";

export default function MainFeatures() {
  const { publicCtx }: any = React.useContext(PublicContext);
  const { t } = useTranslation();

  return (
    <>
      <GridItem xs={12}>
        <GridHeader
          rowSpacing={5}
          justifyContent="center"
          sx={{
            pl: { md: 20, sm: 0 },
            pr: { md: 20, sm: 0 },
            pb: 5,
            background: Background[publicCtx.theme.background.name].secondary,
          }}
        >
          <GridItem sm={4} xs={12}>
            <>
              <Card>
                <StaticImage
                  src="../../../../static/images/home/nft.png"
                  alt="mint nft"
                />
              </Card>
              <Label variant="h5" sx={{ mt: 2 }}>
                {t("mint")}
              </Label>
            </>
          </GridItem>
          <GridItem sm={4} xs={12}>
            <>
              <Card>
                <StaticImage
                  src="../../../../static/images/home/trade.png"
                  alt="trade nft"
                />
              </Card>
              <Label variant="h5" sx={{ mt: 2 }}>
                {t("trade")}
              </Label>
            </>
          </GridItem>

          <GridItem sm={4} xs={12}>
            <Card>
              <>
                <StaticImage
                  src="../../../../static/images/home/game.png"
                  alt="game web3"
                />
                <Label variant="h5" sx={{ mt: 2 }}>
                  {t("game")}
                </Label>
              </>
            </Card>
          </GridItem>
        </GridHeader>
      </GridItem>
    </>
  );
}

function Card({ children }: any) {
  return <div data-aos="zoom-out-up">{children}</div>;
}
