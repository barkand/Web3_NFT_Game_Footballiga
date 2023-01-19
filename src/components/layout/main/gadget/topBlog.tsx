import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { GridHeader, GridItem, Paper, Label } from "../../..";

export default function TopBlog({ language }: any) {
  const { t } = useTranslation();

  return (
    <GridHeader
      rowSpacing={5}
      spacing={5}
      justifyContent="center"
      sx={{
        pl: { md: 20, sm: 0 },
        pr: { md: 20, sm: 0 },
      }}
    >
      <GridItem sm={4} xs={12}>
        <Link to={`${language === "en" ? "" : "/fa"}/blog/wallet`}>
          <Card title={t("wallet-title", { ns: "blog" })}>
            <StaticImage
              src="../../../../static/images/blog/wallet.jpg"
              alt="What's Wallet"
              sizes={"350"}
              width={350}
            />
          </Card>
        </Link>
      </GridItem>

      <GridItem sm={4} xs={12}>
        <Link to={`${language === "en" ? "" : "/fa"}/blog/blockchain`}>
          <Card title={t("blockchain-title", { ns: "blog" })}>
            <StaticImage
              src="../../../../static/images/blog/blockchain.jpg"
              alt="What's Blockchain"
              sizes={"350"}
              width={350}
            />
          </Card>
        </Link>
      </GridItem>

      <GridItem sm={4} xs={12}>
        <Link to={`${language === "en" ? "" : "/fa"}/blog/nft`}>
          <Card title={t("nft-title", { ns: "blog" })}>
            <StaticImage
              src="../../../../static/images/blog/nft.jpg"
              alt="What's NFT"
              sizes={"350"}
              width={350}
            />
          </Card>
        </Link>
      </GridItem>
    </GridHeader>
  );
}

function Card({ children, title }: any) {
  return (
    <>
      <div data-aos="flip-left">
        <Paper sx={{ pt: 2 }}>
          {children}
          <Label variant="h6" sx={{ mt: 2 }}>
            {title}
          </Label>
        </Paper>
      </div>
    </>
  );
}
