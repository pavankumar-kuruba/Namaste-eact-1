const heading=React.createElement("h1",{id:"heading", xyz:"abc"},"Hello World from React!");

const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"Iam an h1 tag"),React.createElement("h2",{},"Iam h2 Tag")]),
       React.createElement("div",{id:"child2"},[
        React.createElement("p",{},"This is a paragraph"),
        React.createElement("p",{},"This is another paragraph")
       ])]);   
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);   