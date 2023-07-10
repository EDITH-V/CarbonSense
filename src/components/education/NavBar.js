import React, { useContext } from "react";
import { LanguageContext, languages } from "./LanguageContext";
import "./DomainSection.css";

function NavBar({ onLanguageChange }) {
  const language = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    onLanguageChange(e.target.value);
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value={languages.english}>English</option>
        <option value={languages.hindi}>Hindi</option>
        <option value={languages.mandarin}>Mandarin</option>
        <option value={languages.malay}>Malay</option>
      </select>
      <nav>{/* Navigation links */}</nav>
    </div>
  );
}

export default NavBar;
