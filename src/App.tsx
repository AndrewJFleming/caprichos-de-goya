import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { Person, HairColor } from "./components/Person";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
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
          <Route path="/about" element={<About categories={categoryData} />} />
          <Route path="/contact" element={<Contact />} />
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
