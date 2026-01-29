import React from "react";
import Layout from "./Components/Layout/Layout";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="bg-blue-500/20 rounded-xl">
          <Layout />
        </div>
      </div>
    </div>
  );
};

export default App;

