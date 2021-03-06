import React, { useEffect, useState } from 'react'
import axios from "axios";
import SoloContent from '../../SingleContent/SoloContent';
import "./Trending.css";


const Trending = () => {
  const [content,setContent]= useState([])

  const fetchTrending= async ()=>{
    const {data}= await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setContent(data.results);
  }

  useEffect(() => {
    fetchTrending()
  }, [])

  return (
    <div>
     <span className="pageTitle">Trending</span>
     <div className="trending">
       { content && content.map((content)=>
         <SoloContent key={content.id} 
         id={content.id}
         poster={content.poster_path}
         title={content.title || content.name}
         date={content.first_air_date || content.release_date}
         media_type={content.media_type}
         vote={content.vote_average}
         />
       )

       }
     </div>
    </div>
  )
}

export default Trending
