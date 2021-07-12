import React from "react"
import Button from "./Button"
const App=()=>{
    return(
        <div>
            <h1 style={{textAlign : "center", color : "#3492eb"}}>Basics of React.js</h1>
            <p style={{textAlign : "center", color : "pink", fontSize : "20px"}}>Hello World! this is a paragraph</p>

            <Button ButtonText="Button 1"/>
            <Button ButtonText="Button 2"/>
            <Button ButtonText="Button 3"/>
            <Button ButtonText="Button 4"/>
        </div>
    )
}

export default App;