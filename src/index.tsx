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
import { Members } from "./components/PageContainer/Members/members";
import { Projects } from "./components/PageContainer/Projects/projects";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // TODO: REMOVE
  <React.StrictMode>
    <PageContainer>
      <Navbar />
      {/* <HeroSection /> */}
    </PageContainer>
    {/* <Companies /> */}
    <PageContainer>
      <Projects />
      <Members />
      {/* <Services /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </PageContainer>
  </React.StrictMode>
);
