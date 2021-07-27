import React,{ useState,useEffect } from 'react';
import axios from "axios";
import SoloContent from '../../SingleContent/SoloContent';
import "../Trending/Trending.css";
require('dotenv').config();

const Series = () => {
 
  const [content,setContent]=useState([]);

  const fetchSeries= async ()=>{
    const {data}= await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate}`
    );
    setContent(data.results);
  }

  useEffect(() => {
    fetchSeries()
     
  }, [])

  return (
    <div>
      <span className="pageTitle">Series</span>
      <div className="trending">
      { content && content.map((content)=>
         <SoloContent key={content.id} 
         id={content.id}
         poster={content.poster_path}
         title={content.title || content.name}
         date={content.first_air_date || content.release_date}
         media_type="tv"
         vote={content.vote_average}
         />
       )}
       </div>
    </div>
  )
}

export default Series
