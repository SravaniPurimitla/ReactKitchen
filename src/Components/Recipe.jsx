import React, { useState } from "react";
import Products from "./Products";
const Recipe=()=>{
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    const  YOUR_APP_ID = "69c23e4a";
    const YOUR_APP_KEY ="4592f6f6e15ad9f1da3d04ebb3f21e56";
    const SubmitHandler=(e)=>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
        .then(response=>response.json())
        .then(data=>setData(data.hits))
    }
    return(
        <>
        <center>
        <h3>Food Recipe's</h3>
        <form onSubmit={SubmitHandler}>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
            <input type="submit" className="btn btn-primary" value="Search"></input>
        </form>
        {data.length>=1?<Products data={data}/>:null}
        </center>
        </>
    )
}
export default Recipe;