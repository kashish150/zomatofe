import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards' ;
import Fooddata from './FoodData' ;


const Search = () => {

  const [fdata,setFdata]=useState(Fooddata);
  return (
    <>
      <form className='d-flex justify-content-center align-items-center mt-3' >
        <input id="search_input" type="text" placeholder="Search for resturants and foods"/> 
        <button id="search_btn"type="submit" > Search </button>
      </form>
    <section> 
      <div className='row mt-2 d-flex justify-content-around align-items-center'>
        <Cards data={fdata}/>
      </div>
      </section>
      </>
  )
}

export default Search ;
