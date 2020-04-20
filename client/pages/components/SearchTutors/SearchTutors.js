import css from "./SearchTutors.module.css"

export default function SearchTutors({setSearchBoolean,searchBoolean}){
    return(<div className={css.mainContainer}>
        <h1 style={{"margin-bottom": "3em"}}>Search for a Tutor Here</h1>
       <div className={css.inputContainer}> <input className={css.searchInput} placeholder="Start typing a subject to begin"/><button className={css.searchButton}>SEARCH</button></div>
        <span className={css.advancedSearch} onClick={()=>{setSearchBoolean(!searchBoolean)}}>advanced search</span>
    </div>)
}