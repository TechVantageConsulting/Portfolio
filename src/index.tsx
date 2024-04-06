import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
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
    <Navbar />
    <HeroSection />
    <Companies />
    <Services />
    <Projects />
    <Members />
    <Contact />
    <Footer />
  </React.StrictMode>
);
