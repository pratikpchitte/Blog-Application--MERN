import React, { useEffect, useState } from 'react'
//import { Context } from "../../"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import "./singlepost.css"

export default function Singlepost() {
const location=useLocation();
const path=location.pathname.split("/")[2];
const[post,setPosts]=useState({});
//const { user } = useContext(Context);
const[title,setTitle]=useState("");
const[desc,setDesc]=useState("");
const[updateMode,setUpdateMode]=useState(false);

useEffect(()=>{
  const getPost=async()=>{
    const res=await axios.get("/api/post/"+path);
    setPosts(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);
  };
  getPost();
},[path]);
// console.log(post);

const handleDelete= async ()=>{
  try {
    await axios.delete(`/api/post/${post._id}`,{
             //data:{usernam:user.username},
    });
    window.location.replace("/");
  } catch (err) {
  }
};

const handelUpdate= async ()=>{
  try {
    await axios.put(`/api/post/${post._id}`,{
      //username:user.username,
      title,desc,
    });
    setUpdateMode(false);
  } catch (err) {
    
  }
};

  return (
    <div>
    <div className="singlepost">
          <div className="singlepostwrapper">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05djZ0bIb21dCat3HSbJAarYnt9dEPGoEqg&usqp=CAU" alt="" className="singlepostig" />
          </div>
          <h1 className="singleposttitle">
            {title}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, odit! Veritatis, est. Atque modi expedita sint autem.

              <div className="singlepostedit">
              <i className="singleposticon fa-solid fa-pen-to-square"></i>
              <i className="singleposticon fa-solid fa-trash-can"></i>
              </div>
          </h1>
          <div className="singlepostinfo">
              <span className="siinglepostauthor">Author:<b>{post.username}</b></span>
              <span className="siinglepostdate">Date :<b>{new Date(post.createdAt).toDateString()}</b></span>
          </div>
          <p className="container my-2 py-2">
            {desc}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia est corrupti aut repudiandae? Cum, dignissimos? Amet iusto perspiciatis numquam ex, voluptatem eveniet dolorem assumenda ducimus, porro quam saepe blanditiis cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia est corrupti aut repudiandae? Cum, dignissimos? Amet iusto perspiciatis numquam ex, voluptatem eveniet dolorem assumenda ducimus, porro quam saepe blanditiis cumque.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia est corrupti aut repudiandae? Cum, dignissimos? Amet iusto perspiciatis numquam ex, voluptatem eveniet dolorem assumenda ducimus, porro quam saepe blanditiis cumque.
          </p>
          <div className="small d-flex justify-content-start my-2 py-2 mx-2">
                <a href="#!" className="d-flex align-items-center me-3">
                  <i className="far fa-thumbs-up me-2"></i>
                  <p className="mb-0">Like</p>
                </a>
                <a href="#!" className="d-flex align-items-center me-3">
                  <i className="far fa-comment-dots me-2"></i>
                  <p className="mb-0">Comment</p>
                </a>
                <a href="#!" className="d-flex align-items-center me-3">
                  <i className="fas fa-share me-2"></i>
                  <p className="mb-0">Share</p>
                </a>
              </div>
          <section>
    <div className="container my-2 py-2">
          <div className="card">
          <div className="card-footer py-3 border-0">
              <div className="d-flex flex-start w-100">
                <img className="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                  height="40" />
                <div className="form-outline w-100">
                  <textarea className="form-control" id="textAreaExample" rows="4"
                    >
                    </textarea>
                  <label className="form-label" for="textAreaExample">Comment</label>
                </div>
              </div>
              <div className="float-end mt-2 pt-1">
                <button type="button" className="btn btn-primary btn-sm">Post comment</button>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex flex-start align-items-center">
                <img className="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="60"
                  height="60" />
                <div>
                  <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                  <p className="text-muted small mb-0">
                    Shared publicly - Jan 2020
                  </p>
                </div>
              </div>
  
              <p className="mt-3 mb-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
              </p>
  
              <div className="small d-flex justify-content-start">
                <a href="#!" className="d-flex align-items-center me-3">
                  <i className="far fa-thumbs-up me-2"></i>
                  <p className="mb-0">Like</p>
                </a>
                <a href="#!" className="d-flex align-items-center me-3">
                  <i className="far fa-comment-dots me-2"></i>
                  <p className="mb-0">Comment</p>
                </a>
                <a href="#!" className="d-flex align-items-center me-3">
                  <i className="fas fa-share me-2"></i>
                  <p className="mb-0">Share</p>
                </a>
              </div>
            </div>
          </div>
    </div>
  </section>
    </div>
    
    </div>
  )
}
