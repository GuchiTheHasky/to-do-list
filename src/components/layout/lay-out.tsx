import Header from "./header";
import Footer from "./footer";
import { FC, ReactNode } from "react";

const LayOut: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default LayOut;
