import React from "react";
import './skillCard.css'

export default function SkillCard({children}){

    return(

        <div className="skill-card">

            {children}

        </div>

    );

}