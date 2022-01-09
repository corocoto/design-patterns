import React from "react";
import {render} from "react-dom";
import "./styles.css";
import {fromEvent, merge} from "rxjs";
import {sample, mapTo} from "rxjs";


merge(
    fromEvent(document, "mousedown").pipe(mapTo(false)),
    fromEvent(document, "mousemove").pipe(mapTo(true))
)
    .pipe(sample(fromEvent(document, "mouseup")))
    .subscribe(isDragging => {
        console.log("Were you dragging?", isDragging)
    });

render(
    <div className="App">Click or drag anywhere and check the console!</div>,
    document.getElementById("root")
);