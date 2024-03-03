import React from "react";
import { GiSevenPointedStar } from "react-icons/gi";

function SkillItem(props){
    return(
        <div className="p-2">
            <p className="text-xl font-bold">{props.skill}</p>
            <p>{props.level}</p>
        </div>
    )
}

export default SkillItem