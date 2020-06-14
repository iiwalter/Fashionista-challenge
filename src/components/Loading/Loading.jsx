import React from 'react'
import { GiLargeDress } from "react-icons/gi";

import './Loading.scss'



const Loading = () =>{

    return (
        <div className="loading">
            <div className="load">
            <GiLargeDress className="load_dress" size={40}/>
            </div>
        </div>

    )
}

export default Loading