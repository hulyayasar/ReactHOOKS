import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetching() {
    
    const [post, SetPost] = useState({})
    const [id,setId] = useState(1)
    const [idButtonClick, setIdButtonClick]  = useState(1)

    const handleClick = () => {
        setIdButtonClick(id)
    }

    useEffect( () => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`)
        .then(res => { 
            console.log(res)
            SetPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idButtonClick])
   
  return (
    <div >
        <input type="text" value ={id} onChange = {e=> setId(e.target.value)}></input>
        <button type="button" onClick={handleClick}>Fetch Data</button>
        <div>{post.title}</div>
       {/* <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
       </ul> */}
       
    </div>
  );
}

export default DataFetching;