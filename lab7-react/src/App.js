import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import LanguageContext from "./LanguageContext";
import MyRoutes from "./MyRoutes";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

function App() {
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };

  return (
    <>
      <LanguageContext.Provider value={value}>
        <h2>Current Language: {language}</h2>
        <LanguageSwitcher />
        <BrowserRouter>
          <Dashboard />
          <MyRoutes />
        </BrowserRouter>
      </LanguageContext.Provider>
    </>
    // <BrowserRouter>
    //   <div>
    //     <Dashboard />
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
