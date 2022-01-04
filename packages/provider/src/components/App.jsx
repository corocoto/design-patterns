import React, {useState} from "react";
import "../styles.css";
import {ThemeContext, themes} from "../constants";
import List from "./List";
import Toggle from "./Toggle";

export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const providerValue = {
    theme: themes[theme],
    toggleTheme
  }

  return (
    <div className={`App theme-${theme}`}>
      <ThemeContext.Provider value={providerValue}>
        <Toggle />
        <List />
      </ThemeContext.Provider>
    </div>
  );
}