import react from "react"

const Button=({buttonText})=>{
    return(
        <div>
            <button className="button">{buttonText}</button>
            <button className="button">button 2</button>
            <button className="button">button 3</button>
        </div>
    )
}

export default Button;