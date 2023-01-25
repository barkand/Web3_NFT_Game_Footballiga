import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

import { PublicContext, DefaultCulture } from "../../context";
import { IconButton } from "../../components";

export default function LanguageButton(props: any) {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const { languages, originalPath } = useI18next();
  const { language }: any = props;

  const handleChange = () => {
    setPublicCtx({
      ...publicCtx,
      culture: DefaultCulture[language],
    });
  };

  return (
    <div style={props.sx}>
      {languages.map((lng) => (
        <Link
          to={originalPath}
          language={lng}
          key={lng}
          style={{
            visibility: lng === language ? "collapse" : "visible",
            width: lng === language ? "0px" : "auto",
            display: lng === language ? "inline-flex" : "contents",
          }}
        >
          <IconButton
            onClick={handleChange}
            sx={{ fontSize: "18px", width: 40, height: 40 }}
          >
            {lng === "en" ? "En" : "Fa"}
          </IconButton>
        </Link>
      ))}
    </div>
  );
}
