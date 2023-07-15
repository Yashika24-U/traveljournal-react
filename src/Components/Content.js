import React from "react"
import location from "../Images/location.png"

export default function Content(props){
   
    return(
        
            <div className="content--head">

                <img className="content--img" src = {props.val.imageUrl}/>
                <div className="stats">
                    <img className="gmap--img" src = {location}/>
                    <span className ="loc-title">{props.val.location}</span>
                    <span className = "faded--text">View On Google Maps</span>
                
                <p className="content--title">{props.val.title}</p>
                <p className="date">{props.val.startDate}- {props.val.endDate}</p>
                <p className="desc">{props.val.description}</p>
                </div>
            
            </div>
           
        
    )
}