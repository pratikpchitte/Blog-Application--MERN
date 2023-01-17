import { useContext, useState ,useEffect} from "react";
import "./write.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Write() {
  
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
    const callWritePage= async()=>{
              try {
                const res= await fetch('/api/valid/check',{
                  method:"GET",
                  headers:{
                    Accept:"appllication/json",
                    "Content-Type":"application/json"
                  },
                  credentials:"include"
                }) ;
                const data=await res.json();
                 setUserData(data);
                
                if(!res.status===200){
                  const error=new Error(res.error);
                  throw error;
                }
              
              } catch (err) {
                console.log(err);
                navigate('/login');
              }
    }
  
     useEffect(() => {
      callWritePage();
     }, []);
     

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username:userData.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/api/post", newPost);
     window.location.replace("/post/" + res.data._id);
     
     if(res===200) console.log("successfule");
     navigate('/');
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          View & post
        </button>
      </form>
    </div>
  );
}