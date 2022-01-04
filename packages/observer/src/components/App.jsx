import {ToastContainer, toast} from "react-toastify";
import React, {useEffect} from "react";
import {Button, FormControlLabel, Switch} from  "@material-ui/core";
import Observable from "../Observable";
import {READABLE_DATETIME, TOAST_CONFIG} from "../constants";

function logger(data) {
  console.log(`${READABLE_DATETIME}: ${data}`)
}

function toastify(data) {
  toast(data, TOAST_CONFIG);
}

const observable = new Observable();


export default function App() {
  useEffect(() => {
    observable.subscribe(logger);
    observable.subscribe(toastify);
    return () => {
      observable.unsubscribe(logger);
      observable.unsubscribe(toastify);
    }
  }, []);

  const handleButtonClick = () => {
    observable.notify("User clicked button!");
  }

  const handleToggle = () => {
    observable.notify("User toggled switch!");
  }

  return (
    <div className="App">
      <Button
        variant="contained"
        onClick={handleButtonClick}
      >
        Click me!
      </Button>
      <FormControlLabel
        control={<Switch onChange={handleToggle} />}
        label="Toggle me!"
      />
      <ToastContainer />
    </div>
  )
}