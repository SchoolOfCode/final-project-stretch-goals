import css from "./SearchTutorsWithFilters.module.css"
import Filters from "./Filters/Filters"
import SearchResults from "./SearchResults/SearchResults"

export default function SearchTutorsWithFilters({searchResultsData,subject, setSubject}){
    return(
    <>
    <div className={css.mainContainer}>
        <h1>Results</h1>
    </div>
    <div className={css.filterContainer}>
<Filters  subject={subject} setSubject={setSubject}/>
<SearchResults searchResultsData={searchResultsData}/>
</div>
</>)
}