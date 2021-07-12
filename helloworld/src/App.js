//component file name should alwaya starts capital letter
//Other file name is in lower letters

import React from "react"
import "./styles.css"
import Button from "./Button"

// function Apple(){   //Apple is a component not a function
//     return(
//         <div>
//              <h1>Hello World</h1>  {/*//this h1 is a jsx not html */}
//              <h1>Hello World</h1>  {/*if you  want to return many return statments so we need to use div */}
//         </div>
//     )
// }

const Apple=()=>{   //if we want to use arrow function for that we need to use const not function
    return(
        <div>
             <h1 style={{textAlign : "center"}}>Hello World</h1> {/* for writing inline css we use {{ }} */}
             <h1>Hello World</h1>  {/*if you  want to return many return statments so we need to use div */}
             {/* <button className="button">button 1</button>
             <button className="button">button 2</button>
             <button className="button">button 3</button> */}

             <Button buttonText="Apple"/>
             <Button buttonText="Mango"/>
        </div>
    )
}


export default Apple;