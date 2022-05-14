import React from 'react';

// Styles
import styles from './Item.module.css';

const Item = props => {
  return (
    <li className={styles.flyoutItem}>
      {props.children}
    </li>
  );
};

export default Item;
