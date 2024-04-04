import React, { ReactNode } from "react";
import "./pageContainer.scss";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div id="page-container" className="page-container">
      {children}
    </div>
  );
};

export default PageContainer;
