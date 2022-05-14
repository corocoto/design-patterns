import React from "react";

// Components
import FlyOut from '../FlyOut';

const FlyOutMenu = props => {
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.List>
        <FlyOut.Item>Edit</FlyOut.Item>
        <FlyOut.Item>Delete</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  )
}

export default FlyOutMenu;
