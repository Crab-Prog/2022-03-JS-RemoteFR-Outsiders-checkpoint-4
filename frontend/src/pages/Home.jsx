import React, { useContext } from "react";
import Header from "@components/Header";
import "@styles/Home.scss";

import ExportContext from "@contexts/context";
import HomeInfos from "@components/HomeInfos";

export default function Home() {
  const { isOpen } = useContext(ExportContext.GeneralContext);

  return (
    <>
      <header
        className={`${isOpen ? "home-header-alternative" : "home-header"}`}
      >
        <Header />
      </header>
      <HomeInfos />
    </>
  );
}
