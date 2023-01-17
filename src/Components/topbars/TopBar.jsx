import { useContext ,useEffect,useState} from "react";
import{Link,useNavigate} from "react-router-dom";


import "./topbar.css"

export default function TopBar() {
  var user=false;
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
     if(userData){
      user=true;
     }
  const handleLogout= async()=>{
   try {
    const res= await fetch('/api/valid/logout',{
      method:"GET",
      headers:{
        Accept:"appllication/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    }) ;
    user=false;
    navigate('/login');
    window.location.reload();
   } catch (error) {
    
   }
  };
  return (
    <div className="top">
    <div className="topLeft">
      <i className="topIcon fab fa-facebook-square"></i>
      <i className="topIcon fab fa-instagram-square"></i>
      <i className="topIcon fab fa-pinterest-square"></i>
      <i className="topIcon fab fa-twitter-square"></i>
    </div>
    <div className="topCenter">
      {user ? ( <Link  to="/write">
          <a className="btn btn-primary mx-5" style={{backgroundColor: "#55acee"}} href="#!" role="button"
  ><i class="fas fa-plus me-2"></i>New Post</a>           </Link>):(
               ""
  )}    
    </div>
    <div className="topRight">
      {user ? (
        <>
        <Link className="link" to="/settings">
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </Link>
        <button type="button" class="btn btn-success mx-2" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">
            <button type="button" class="btn btn-primary">Login</button>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">
            <button type="button" class="btn btn-light">SignUp</button>
            </Link>
          </li>
        </ul>
      )}
      {/* <i className="topSearchIcon fas fa-search"></i> */}
    </div>
    
    
  </div>
  );
}
