import React from "react";

function HomeCard(props)
{
    return(
        <div className = "HomeCarddiv">
            {/* <img src = {props.imgURL} ></img> */}
            <a href = {props.pageURL}><h3>{props.name}</h3></a>
        </div> 
    )
}

export default HomeCard;