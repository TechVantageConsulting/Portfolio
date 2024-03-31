// PageContainer.tsx
import React, { ReactNode } from "react";
import "./PageContainer.scss"; // Import your SCSS file for styling

interface PageContainerProps {
  children: ReactNode; // ReactNode type allows any valid JSX
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className="page-container">{children}</div>;
};

export default PageContainer;
