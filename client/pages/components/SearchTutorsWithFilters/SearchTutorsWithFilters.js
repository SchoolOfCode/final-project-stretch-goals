import css from "./SearchTutorsWithFilters.module.css"
import Filters from "./Filters/Filters"

export default function SearchTutorsWithFilters(){
    return(
    <><div className={css.mainContainer}>
        <h1>Results</h1>
    </div>
    <div className={css.filterContainer}>
<Filters/>

</div>
</>)
}