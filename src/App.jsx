import React, { useState } from "react";
import Layout from "./layout";
import HomePage from "./pages/HomePage";


const App = () => {

  return (
    <div>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default App;
