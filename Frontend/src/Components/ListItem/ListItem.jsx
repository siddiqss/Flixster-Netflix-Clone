import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./ListItem.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({ item, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL});
  
  useEffect(()=>{
    const getMovie= async ()=>{
      try {
        const res = await axiosInstance.get("/movies/find/"+item, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  },[item, axiosInstance]);
  
  return (
    <Link to={{pathname: "/watch", movie: {movie}}}>
    <div
      className='listItem'
      style={{ left: isHovered && index * 255 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img
        src={movie.img}
        alt=''
      />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className='itemInfoTop'>
              <span>{movie.duration}</span>
              <span className='limit'>+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className='desc'>
              {movie.desc}
            </div>
            <div className='genre'>{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
}

export default ListItem;
