import React from "react";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";

const Error404 = () => {
  return (
    <div className="Home">
      <Header />
      <div className="main-container">
        <Navbar />
        <div className="error404">
          <h1>404</h1>
          <h2>L'utilisateur que vous recherchez n'existe pas</h2>
        </div>
      </div>
    </div>
  );
};

export default Error404;
