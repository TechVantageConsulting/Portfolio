import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import PageContainer from "./components/PageContainer/pageContainer";
import { Navbar } from "./components/PageContainer/Navbar/navbar";
import { HeroSection } from "./components/PageContainer/HeroSection/heroSection";
import { Companies } from "./components/Companies/companies";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageContainer>
      <Navbar />
      <HeroSection />
    </PageContainer>
    <Companies />
  </React.StrictMode>
);
