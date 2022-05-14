import React from "react";

// Components
import ImagesList from '../ImagesList';

// Styles
import styles from './App.module.css';

const App = () => {
  return (
    <React.StrictMode>
      <div className={styles.App}>
        <ImagesList />
      </div>
    </React.StrictMode>
  )
};

export default App;
