import React from "react";

// Styles
import styles from './List.module.css';

const List = ({open, children}) => {
  return open && <ul className={styles.flyoutList}>{children}</ul>;
};

export default List;
