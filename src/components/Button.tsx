import React from 'react'
import './Button.css'
type ButtonProps={
    text: string
    edges?: string
    onClick: () => void
};
const Button:React.FC<ButtonProps>=({text,edges,onClick})=>{
    console.log("Edges:",edges)
    return(
        <button onClick={onClick} className={`button ${edges}`}>{text}</button>
    )
}
Button.defaultProps = {
    text: 'BUTTON',
    edges: 'round',
  }
export default Button;