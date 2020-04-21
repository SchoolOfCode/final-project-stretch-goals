import css from "./Button.module.css"

export default function Button({text, handleClick}){
console.log(handleClick)
    return(
    <div className={css.buttonTemplate} onClick={handleClick}>{text}</div>
    )
}