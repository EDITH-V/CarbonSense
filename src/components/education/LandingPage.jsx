import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function LandingPage() {
  const language = useContext(LanguageContext);

  // Retrieve translations based on selected language
  const translations = {
    en: {
      title: "Carbon Footprint Education",
      description: "Learn about carbon footprint and how to reduce emissions."
    },
    hi: {
      title: "कार्बन पादपी शिक्षा",
      description: "कार्बन पादपी और इमिशन कम करने के बारे में सीखें।"
    },
    zh: {
      title: "碳足迹教育",
      description: "了解碳足迹和如何减少排放。"
    },
    ms: {
      title: "Pendidikan Jejak Karbon",
      description: "Pelajari tentang jejak karbon dan cara mengurangi emisi."
    }
  };

  return (
    <div>
      <h1>{translations[language].title}</h1>
      <p>{translations[language].description}</p>
      {/* Other landing page content */}
    </div>
  );
}

export default LandingPage;
