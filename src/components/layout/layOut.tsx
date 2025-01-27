import Header from "./header";
import Footer from "./footer";
import { FC } from "react";
import { ReactNodeType } from "../types/reactNodeType"

const LayOut: FC<ReactNodeType> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayOut;
