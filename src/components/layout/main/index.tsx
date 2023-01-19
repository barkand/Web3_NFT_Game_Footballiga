import React from "react";

import { ScrollTopButton } from "../..";

export default function Main({ children, language }: any) {
  return (
    <ScrollTopButton>
      <main
        style={{
          direction: language === "en" ? "ltr" : "rtl",
          minHeight: "94vh",
        }}
        className={language}
      >
        {children}
      </main>
    </ScrollTopButton>
  );
}
