import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./single.css"
import Singlepost from "./Singlepost"

export default function single() {
  return (
    <>
    <div className="single">
     <Singlepost/>
     <Sidebar/>
    </div>
    </>
  )
}
