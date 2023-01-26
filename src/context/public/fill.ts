import { DefaultTheme, DefaultCulture } from "..";

let _language =
  typeof window !== "undefined"
    ? localStorage.getItem("gatsby-i18next-language")
    : null;

let _lang: any = _language ?? process.env.GATSBY_LANGUAGE;

let _background: any =
  typeof window !== "undefined" ? localStorage.getItem("background") : null;

let _mode: any = _background ?? process.env.GATSBY_THEM_MODE;

const DefaultPublic = {
  culture: DefaultCulture[_lang],
  theme: {
    background: DefaultTheme[_mode],
  },
};

export default DefaultPublic;
