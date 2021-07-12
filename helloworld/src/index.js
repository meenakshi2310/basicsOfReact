import React from "react"
import ReactDOM from "react-dom"
import Apple from "./App" //if we are in same folder then use ./ only
//.. is used to come out of current folder /is used to go to another folder again /is used to go to file eg. ../public/index.html

// function Apple(){   //Apple is a component not a function
//     return(
//         <h1>Hello World</h1>  //this h1 is a jsx not html
//     )
// }

ReactDOM.render(<Apple/>, document.getElementById("root")); //apple is a component therefore we write it inside selfclosing tags