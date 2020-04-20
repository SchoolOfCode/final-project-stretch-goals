import css from "./Filters.module.css"
import PriceSlider from "./PriceSlider/PriceSlider"
import ExperienceSlider from "./ExperienceSlider/ExperienceSlider"
import {useState} from "react"

export default function Filters({subject, setSubject}){
const [priceMin, setPriceMin] = useState(10)
const [priceMax, setPriceMax] = useState(40)
const [experience, setExperience] = useState(5)

function handleChange(e){
    setSubject(e.target.value)
    console.log(subject)
}

    return(
    <div className = {css.mainContainer}>
        <div className = {css.subjectContainer}>
            <h3 >Subjects</h3>
            <input className={css.searchInput} placeholder="Start typing a subject to begin" value={subject} onChange={handleChange}/>
        </div>
        <div className={css.priceContainer}>
        <h3> Price </h3>
<PriceSlider priceMin={priceMin} priceMax={priceMax} setPriceMax={setPriceMax} setPriceMin={setPriceMin} />
          </div>
        <div className={css.experienceContainer}>
        <h3> Experience </h3>
<ExperienceSlider experience={experience} setExperience={setExperience}/>
          </div>
    </div>
    )
}