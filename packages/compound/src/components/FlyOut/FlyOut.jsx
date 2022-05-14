import React, {useState} from "react";

// Components
import {Toggle, List, Item} from "./components";

// Styles
import styles from './FlyOut.module.css';

const FlyOut = props => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.flyout}>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {open, setOpen})
      )}
    </div>
  );
};

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;

export default FlyOut;
