import css from "./SearchTutorsWithFilters.module.css"

export default function SearchTutorsWithFilters(){
    return(
    <><div className={css.mainContainer}>
        <h1>Search for a Tutor Here</h1>
        <input className={css.searchInput} placeholder="Start typing a subject to begin"/>
    </div>
    <div className={css.filterContainer}>
<div className={css.subjectContainer}>
    <h3 style={{"grid-column": "span 2", "text-align" : "center"}}>Subjects</h3>
    <div>
  <input type="checkbox" name="scales"/>
  <label for="scales">Math</label>
    </div>
    <div>
  <input type="checkbox" name="scales1"/>
  <label for="scale1s">Eng</label>
    </div>
    <div>
  <input type="checkbox" name="scales2"/>
  <label for="scales2">Sci</label>
    </div>
    <div>
  <input type="checkbox" name="scales3"/>
  <label for="scales3">Dog</label>
    </div>
</div>
<div className={css.priceContainer}>price</div>
<div className={css.experienceContainer}>exp</div>
<div className={css.ratingContainer}>rating</div>
</div></>)
}