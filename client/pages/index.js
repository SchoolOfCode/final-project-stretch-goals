import Head from 'next/head'
import {useState} from "react"
import css from './index.module.css'
import Navbar from './components/NavBar/NavBar'
import SearchTutors from './components/SearchTutors/SearchTutors'
import SearchTutorsWithFilters from './components/SearchTutorsWithFilters/SearchTutorsWithFilters'


export default function Home() {
  const [subject, setSubject] = useState("")
  const [searchBoolean, setSearchBoolean] = useState(false)
  const [searchResultsData, setSearchResultsData] = useState([{  
    "email": "marksgillgan@gmail.com",
    "firstName": "Mark",
    "lastName": "Gilligan",
    "subject(s)": "[english, maths,science]",
    "video": "n/a",
    "bio": "I like to teach new things",
    "level": "GCSE",
    "price": "12",
    "location": "Sutton Coldfield B76 1DS",
    "experince": "10",
    "rating": "4",
    "paymentsDetails:": "bank of mark"
  }])
  return (
    <div className={css.mainContainer}>
      <Head>
        <title>Doceo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
<Navbar/>

<div className={css.gridContainer}>
{searchBoolean ? <SearchTutorsWithFilters searchResultsData={searchResultsData} subject={subject} setSubject={setSubject}/> : <SearchTutors setSearchResultsData={setSearchResultsData} subject={subject} setSubject={setSubject} setSearchBoolean={setSearchBoolean} searchBoolean={searchBoolean}/>}
{/* if search has been perform or advanced search button pressed then display this version of the search thing instead!  */}
</div>
      
</div>
  )
}
