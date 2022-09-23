import React from "react";

const Socials=({url,src})=>{
    const imgg =(url)=>{
        window.open(url);
    }
    return(
        <div className="socials" onClick={imgg(url)}>
            <img src={toString(src)}></img>
        </div>
    )
}
export default Socials