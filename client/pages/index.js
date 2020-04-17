import Head from 'next/head'
import {useState} from "react"
import css from './index.module.css'
import Navbar from './components/NavBar/NavBar'
import SearchTutors from './components/SearchTutors/SearchTutors'
import SearchTutorsWithFilters from './components/SearchTutorsWithFilters/SearchTutorsWithFilters'


export default function Home() {
  const [searchBoolean, setSearchBoolean] = useState(false)
  return (
    <div className={css.mainContainer}>
      <Head>
        <title>TutorMate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
<Navbar/>

<div className={css.gridContainer}>
{searchBoolean ?   <SearchTutorsWithFilters/> : <SearchTutors setSearchBoolean={setSearchBoolean} searchBoolean={searchBoolean}/>}
{/* if search has been perform or advanced search button pressed then display this version of the search thing instead!  */}
</div>
      
</div>
  )
}
