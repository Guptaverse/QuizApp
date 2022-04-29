import React from "react";
const img =(url)=>{
    window.open(url);
}
export const socials =({url,src})=>{
    return(
        <div className="socials" onClick={this.img(url)}>
            <img src={src}></img>
        </div>
    )
}