
import "./poster.css"
import{Link} from "react-router-dom";

export default function Poster({post}) {
  const img_path="http://localhost:5001/images/";
  return (

    // <div className="post">
    //   <div className="firstblock">
    //  <img
    //    className="postimg"
    //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05djZ0bIb21dCat3HSbJAarYnt9dEPGoEqg&usqp=CAU" alt="" />
    //   </div>
    //   <div className="secondblock">
    //   <div className="postinfo">
    //     <span className="posttitle">
    //     {/* <span>{post.title}</span> */}
    //       <Link className="link" to={`/post/${post._id}`}>
    //      {post.title} 
    //       </Link>
         
    //     </span>
    //     <hr />
    //     <span className="postdate">
    //       {new Date(post.createdAt).toDateString()}
    //     </span>

    //   </div>
    //   <p className="postDesc">
    //     {post.desc}
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
    //     officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
    //     fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
    //     atque, exercitationem quibusdam, reiciendis odio laboriosam?
    //   </p>
    //   </div>
    // </div>

    <div className="card mb-2" style={{maxWidth: "840px"}}>
  <div className="row g-0">
    <div className="col-md-2">
      <img
        src=""
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      
        <h5 className="card-title"><Link className="link" to={`/post/${post._id}`}>
        {post.title} 
          </Link></h5>
        <p className="card-text">
        {post.desc}
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted"> <span className="postdate">
          {new Date(post.createdAt).toDateString()}
       </span></small>
        </p>
      </div>
    </div>
  </div>
</div>

    
  )
}
