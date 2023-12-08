import React from "react";
import { Link } from 'react-router-dom'
import "./ButtonCard.scss"

const ButtonCard = (props) => {
    return ( 
        <Link className = {'grid-item'} to = {props.path}>
            <button
                className={props.noStyle ? '':'card'}
                onClick = {props.onClick}
            >
                {props.buttonTitle}
            </button>
        </Link>
    )
}

export default ButtonCard