import React from "react";

import { PublicProvider } from "../../context";
import { Theme } from "../../theme";
import Main from "./main";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, language }: any) {
  return (
    <>
      <PublicProvider>
        <Theme>
          <Header language={language} />
          <Main language={language}>{children}</Main>
          <Footer />
        </Theme>
      </PublicProvider>
    </>
  );
}
