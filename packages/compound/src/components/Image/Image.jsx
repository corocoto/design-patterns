import React from 'react';

// Styles
import styles from './Image.module.css';

// Components
import FlyOutMenu from "../FlyOutMenu";

const Image = ({source}) => {
  return (
    <div className={styles.imageItem}>
      <img src={source} alt="Squirrel" />
      <FlyOutMenu />
    </div>
  );
};

export default Image;
