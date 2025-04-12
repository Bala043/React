import React from "react"
import ReactDOM from "react-dom/client"
const root=ReactDOM.createRoot(document.getElementById("root"))
console.log(root)
const child=React.createElement("h1",{id:"greeting",className:"greet"},"Hello World");
console.log(child)
//It Takes Three Argruments tag name, object which contains attributes of the elements and the third one is children
root.render(child)



