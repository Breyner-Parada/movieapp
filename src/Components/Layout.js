import React from "react";
import { Footer } from "./Footer";
import '../styles/Layout.css';

export const Layout = ({children}) => {
  return (
    <div className="Layout">
        {children}
        <Footer />
    </div>
  )
}

