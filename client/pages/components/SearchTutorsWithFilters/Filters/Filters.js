import css from "./Filters.module.css"
import SliderTemplate from "./SliderTemplate/SliderTemplate"
import {useState} from "react"

export default function Filters(){
const [subject, setSubject] = useState("")
const [priceMin, setPriceMin] = useState(10)
const [priceMax, setPriceMax] = useState(40)
const [experience, setExperience] = useState(5)

    return(
    <div className = {css.mainContainer}>
        <div className = {css.subjectContainer}>
            <h3 style={{"grid-column": "span 2", "text-align" : "center"}}>Subjects</h3>
            <input className={css.searchInput} placeholder="Start typing a subject to begin" value={subject}/>
        </div>
        <div className={css.priceContainer}>
        <h3> Price </h3>
<SliderTemplate defaultSliderValue={[priceMin, priceMax]}/>
          </div>
        <div className={css.experienceContainer}>
        <h3> Experience </h3>
<SliderTemplate defaultSliderValue={experience} setState={setExperience}/>
          </div>
    </div>
    )
}