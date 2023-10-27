// const heading = React.createElement("h1", { id : "heading", name: "head" }, " HEllo World from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id : "parent" } , 
    React.createElement("div", { id:"child" }, React.createElement("h1", {}, "I am H1 tag"))
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);