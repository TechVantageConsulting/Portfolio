import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import PageContainer from "./components/PageContainer/PageContainer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageContainer>
      <div>Components</div>
    </PageContainer>
  </React.StrictMode>
);
