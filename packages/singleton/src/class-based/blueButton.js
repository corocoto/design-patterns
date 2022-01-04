import counter from "./counter";

const button = document.getElementById("blue-button");
button.addEventListener("click", () => {
    counter.increment()
    console.log("Counter total: ", counter.getCount());
});
