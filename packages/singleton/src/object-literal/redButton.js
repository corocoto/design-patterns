import counter from "./counter";

const button = document.getElementById("red-button");
button.addEventListener("click", () => {
    console.log("Counter total: ", counter.increment());
});
