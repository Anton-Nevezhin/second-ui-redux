import { ReactNode } from "react";
import AlertView from "../AlertView";
import "./mainLayout.css";

const MainLayout = ({ children }: { children: ReactNode }) => {
  // обертка. В ней один alert
  return (
    <div className="content">
      {children}
      <AlertView />
    </div>
  );
};

export default MainLayout;
