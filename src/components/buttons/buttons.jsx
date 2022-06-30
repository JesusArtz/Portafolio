import React from "react";

export default function NavBarButtons({url, text}){

    return(
        <a href={url}>
            {text}
        </a>
    );

};