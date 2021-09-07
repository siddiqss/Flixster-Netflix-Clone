import { useEffect, useState } from "react";
import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";
import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL});

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjc4ODM4YTg2Yzc0OTVhMjhiYTc0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDU3MDMxMiwiZXhwIjoxNjMxMDAyMzEyfQ.85yyruBbbOw-nLDwX9vt8kO0SnZBzHfgHyj_4hhANX0",
            },
          }
        );
        if(type==="series" || type==="movie"){
          setLists(res.data)
        }else{
          setLists(res.data[0])
        }

      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);


  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} setGenre = {setGenre} />

      {lists.map((list)=>{
        
        return (<List list={list} key={list._id}/>)
      })}
    </div>
  );
}

export default Home;
