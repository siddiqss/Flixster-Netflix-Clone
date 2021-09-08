import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Featured.scss";

function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});
  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL});
  
  useEffect(() => {
    const getRandomContent = async () => {
      try {

        const res = await axiosInstance.get(`/movies/random?type=${type}`, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name='genre' id='genre' onChange={e=>setGenre(e.target.value)}>
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='horror'>Horror</option>
            <option value='historical'>Historical</option>
            <option value='scifi'>Sci-Fi</option>
            <option value='thriller'>Thriller</option>
            <option value='animation'>Animation</option>
            <option value='western'>Western</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}
      <img
        // https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
        src={content.img}
        alt=''
      />

      {/* https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffanart.tv%2Ffanart%2Fmovies%2F326425%2Fhdmovielogo%2Fextraction-56bee0351ca4c.png&f=1&nofb=1 */}

      <div className='info'>
        <img src={content.imgTitle} alt='' />
        <span className='desc'>{content.desc}</span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
