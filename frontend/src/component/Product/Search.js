import React, { Fragment } from 'react'
import { useState} from 'react'
import "./Search.css";
import { useNavigate } from "react-router-dom";
import MetaData from '../layout/MetaData';

const Search = () => {
    let navigate = useNavigate();
    const [keyword, setKeyword]=useState("")

    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        
        if(keyword.trim()){
           navigate(`/products/${keyword}`);
        }else{
            navigate("/products");
        }
        
    }

  return (
    <Fragment>
      <MetaData title={`Search Product`}/>
    <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input type="text" placeholder='Search a product . . .'
        onChange={(e)=>setKeyword(e.target.value)} 
        />
    <input type="submit" value="Search" />
    </form>
    </Fragment>
  )
}

export default Search