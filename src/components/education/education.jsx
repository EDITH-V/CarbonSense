import React from "react"
import img from "../images/education.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import { LanguageContext, languages } from "./LanguageContext";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import DomainSection from "./DomainSection";
import { useState } from "react";

const Education = () => {
  const [language, setLanguage] = useState(languages.english);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  return (
    <>
      <section className='services mb'>
      <Back name='Lets Build Together Carbon Consious World' title='What is Carbon FootPrint' cover={img} />
      </section>
      <LanguageContext.Provider value={language}>
      <div>
        <NavBar onLanguageChange={handleLanguageChange} />
        <LandingPage />
        <DomainSection domain="food" />
        <DomainSection domain="transport" />
        <DomainSection domain="homeAppliances" />
        <DomainSection domain="clothing" />
        <DomainSection domain="electricity" />
      </div>
    </LanguageContext.Provider>

      
    </>
  )
}

export default Education
