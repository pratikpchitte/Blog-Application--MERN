import "./sidebar.css"
import { useEffect,useState } from "react";
import React from 'react';
import axois from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
  const getCats=async ()=>{
    const res=await axois.get("/api/categories");
    setCats(res.data);
  };
  getCats();
},[]);
  return (
    <div className="sidebar gradient-custom-2">
     <div className="sidebaritem">
         <span className="sidebartitle">
             Welcome
         </span>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05djZ0bIb21dCat3HSbJAarYnt9dEPGoEqg&usqp=CAU" alt="" />

         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam, nisi voluptatum natus laborum, quod molestias qui.</p>
     </div>
     <div className="sidebaritem">
         <span className="sidebartitle">CATEGORIES</span>
         <ul className="sidebarlist">
             {cats.map((c)=>(
               <Link to={`/api/?cat=${c.name}`} className="link">
                  <li className="sidebarListItem">{c.name}</li>
               </Link>
             ))}
             
         </ul>

     </div>
     <div className="sidebaritem">
         <span className="sidebartitle"> Follow us</span>
          <div className="sidebarsocial">
        <i className="sidebaricon fa-brands fa-facebook-square"></i>
        <i className="sidebaricon fa-brands fa-twitter"></i>
        <i className="sidebaricon fa-brands fa-instagram"></i>
        <i className="sidebaricon fa-brands fa-linkedin-in"></i>
        
          </div>
     </div>
    </div>
  )
}
