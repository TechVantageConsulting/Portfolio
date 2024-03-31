import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import PageContainer from "./components/PageContainer/pageContainer";
import { Navbar } from "./components/PageContainer/Navbar/navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageContainer>
      <Navbar />
    </PageContainer>
  </React.StrictMode>
);
