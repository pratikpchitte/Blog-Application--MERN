import "./post.css"

import Poster from "../Poster/Poster"

export default function Post({post}) {
  return (
    <div className="Post">
{post.map((p)=>(
  <Poster post={p}/>
))}
        
        {/* <Poster/>
        <Poster/>
        <Poster/>
        <Poster/>
        <Poster/>  */}
    </div>
  );
}
