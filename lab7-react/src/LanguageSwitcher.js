import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  function changeLanguage() {
    if (language === "en") {
      setLanguage("jp");
    } else {
      setLanguage("en");
    }
  }

  return (
    <button onClick={() => changeLanguage()}>
      Switch Language (Curreent : {language})
    </button>
  );
};

export default LanguageSwitcher;
