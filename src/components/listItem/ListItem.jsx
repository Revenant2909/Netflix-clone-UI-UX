import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import React from "./listItem.scss";
import { useState } from "react";

export default function ListItem({index}){
    const[isHovered,setIsHovered] = useState(false);
    const trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
  return (
    <div className="listItem"
    //To center images during hover need to split the size of img including the margin
    style={{left:isHovered && index*225 + index*2.5+2}} 
    onMouseEnter={()=>setIsHovered(true)}
     onMouseLeave={()=>setIsHovered(false)}>
       <img src="https://i.ibb.co/Zx1WvMT/image.png" alt="error" border="0"/>
     {isHovered && (
        <>
     <video src={trailer} autoPlay={true} loop/>
    <div className="itemInfo">
        <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
            <span>4 Seasons</span>
            <span className="limit">HD</span>
            <span className="limit">U/A 16+</span>
        </div>
        <div className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Asperiores quod.
        </div>
        <div className="genre">Witty·Dramedy·Notable Soundtrack</div>
    </div>
    </>  )}
    </div>
  )
}
