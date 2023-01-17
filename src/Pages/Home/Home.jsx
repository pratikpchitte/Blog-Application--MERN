 import React, { useEffect, useState } from 'react'
import Header from "../../Components/Headers/Header"
import Post from '../../Components/Posts/Post'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./home.css"
import axios from "axios";
import { useLocation } from 'react-router-dom'


export default function Home() {
  const [posts,setPosts]=useState([]);
  const{search}=useLocation();

  useEffect(()=>{
        const fetchPost = async()=>{
const res= await axios.get("/api/post"+search);
setPosts(res.data);
        };
        fetchPost();
  },[]);
  return (
      <>
      {/* <Header/>  */}
       <div className="home gradient-custom-3">
             
             {/* {posts.map((c)=>(
               <span>{c.title}</span>
             ))} */}
             <Sidebar/>
             

         <Post post={posts}/>
        
         
        
       </div>
      </>
       
    
  )
}
