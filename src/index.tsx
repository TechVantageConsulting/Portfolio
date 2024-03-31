import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import PageContainer from "./components/PageContainer/PageContainer";
import { Footer } from "./components/PageContainer/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageContainer>
      <div>Components</div>
      <Footer/>
    </PageContainer>
  </React.StrictMode>
);
