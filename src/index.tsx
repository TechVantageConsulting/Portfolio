import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import PageContainer from "./components/PageContainer/pageContainer";
import { Navbar } from "./components/PageContainer/Navbar/navbar";
import { HeroSection } from "./components/PageContainer/HeroSection/heroSection";
import { Companies } from "./components/PageContainer/Companies/companies";
import { Contact } from "./components/PageContainer/Contact/contact";
import { Footer } from "./components/PageContainer/Footer/footer";
import { Services } from "./components/PageContainer/Services/services";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // TODO: REMOVE
  <React.StrictMode>
    <PageContainer>
      <Navbar />
      {/* <HeroSection /> */}
    </PageContainer>
    {/* <Companies /> */}
    <PageContainer>
      <Services />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </PageContainer>
  </React.StrictMode>
);
