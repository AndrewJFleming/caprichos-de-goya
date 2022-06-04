import { FC, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { SinglePrint } from "./pages/SinglePrint/SinglePrint";
import { PrintCategory } from "./pages/PrintCategory/PrintCategory";
import { Header } from "./components/Header/Header";
import { VerticalMenu } from "./components/VerticalMenu/VerticalMenu";
import { SubCategory } from "./interfaces";

import { imageData, otherLinks, categoryData } from "./data";

const App: FC = () => {
  const [allSubCategories, setAllSubCategories] = useState<SubCategory[]>([]);
  const [vertMenuCollapsed, setVertMenuCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const mergedSubCategories: SubCategory[] = [];
    categoryData.forEach((category) =>
      category.subCategories.forEach((subCategory) =>
        mergedSubCategories.push(subCategory)
      )
    );
    setAllSubCategories(mergedSubCategories);
  }, []);

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
            path="/about"
            element={<About allSubCategories={allSubCategories} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/caprichos/:imageId"
            element={<SinglePrint imageData={imageData} />}
          />
          <Route
            path="/category/:catId"
            element={
              <PrintCategory
                imageData={imageData}
                allSubCategories={allSubCategories}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
