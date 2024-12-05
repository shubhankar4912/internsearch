import { useState } from "react"

function SearchBox() {
  const [searchtext,setsearch]=useState("");  
  return (
    <div className=" w-screen h-screen flex justify-center absolute top-32">
        <div><input placeholder="search blogs"></input></div>
      
    </div>
  )
}

export default SearchBox
