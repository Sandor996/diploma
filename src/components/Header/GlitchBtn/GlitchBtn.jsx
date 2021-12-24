import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./GlitchBtn.module.css"

const GlitchBtn = (props) => {
    return (
       <NavLink to={props.href}>
        <div className={classes.glitch_btn}>
            <div className={classes.text}>{props.name}</div>
            <div className={classes.mask}>
                <span>{props.name}</span>
            </div>
        </div>
        </NavLink>
       

    )
}

export default GlitchBtn