import React from "react";

export const languages = {
  english: "en",
  hindi: "hi",
  mandarin: "zh",
  malay: "ms"
};

export const LanguageContext = React.createContext(languages.english);
