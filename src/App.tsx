import React, { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { Person, HairColor } from "./components/Person";
import { Home } from "./pages/Home/Home";
import { SingleImage } from "./pages/SingleImage/SingleImage";
import { ImageCategory } from "./pages/ImageCategory/ImageCategory";
import { Header } from "./components/Header/Header";
import { VerticalMenu } from "./components/VerticalMenu/VerticalMenu";

import { imageData, otherLinks, categoryData } from "./data";

const App: FC = () => {
  const [vertMenuCollapsed, setVertMenuCollapsed] = useState<boolean>(false);

  const handleVertCollapse = () => {
    setVertMenuCollapsed(!vertMenuCollapsed);
  };

  return (
    <div className="app-wrapper">
      <VerticalMenu
        otherLinks={otherLinks}
        categories={categoryData}
        vertMenuCollapsed={vertMenuCollapsed}
        handleVertCollapse={handleVertCollapse}
      />
      <div className="app-inner">
        <Header
          otherLinks={otherLinks}
          vertMenuCollapsed={vertMenuCollapsed}
          handleVertCollapse={handleVertCollapse}
        />
        <Routes>
          <Route path="/" element={<Home imageData={imageData} />} />
          <Route
            path="/caprichos/:imageId"
            element={<SingleImage imageData={imageData} />}
          />
          <Route
            path="/category/:catId"
            element={
              <ImageCategory imageData={imageData} categories={categoryData} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
