import css from "./SearchResults.module.css"

export default function SearchResults({searchResultsData}){
    return(
        <ul>
       {searchResultsData.map((x,i)=>{

           return(
           <li key={i}>
           <h1>{x.id}</h1>
<p>{x.biography}</p>
<p>{x.price}</p>

           {/* <h1>{x.firstName} {x.lastName}</h1>
           <p>{x.bio}</p>
               here is where we will define what data will be shown and how on each tutorcard */}
           </li>)
        })}
        </ul>
)
}