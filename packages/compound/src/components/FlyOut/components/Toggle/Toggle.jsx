import React from "react";

// Components
import Icon from '../../../Icon';

// Styles
import styles from './Toggle.module.css';

const Toggle = ({open, setOpen}) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <button className={styles.flyoutButton} onClick={handleClick}>
      <Icon/>
    </button>
  );
};

export default Toggle
