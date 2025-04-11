const root=ReactDOM.createRoot(document.getElementById("root"))
//<div parent>
//<div child one>
    //<h1></h1>
    //</div>
    //<div child 2>
    //<h1></h1>
    //</div>
   //</div>Create This Structure
   console.log(root)//Prints in object format not html tag
   //React(object)=>Render() converts the objects to the html format that displays in the website

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{className:"First"},"Hello"),React.createElement("h2",{className:"Second"},"World")]),React.createElement("div",{id:"child2"},
[React.createElement("h3",{},"Hello"),React.createElement("h2",{},"World")]))
root.render(parent)         


   
   





