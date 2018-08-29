import React, { Component } from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="title">{props.num}</div>
            </div>  
            <div className="back">
                 <div className="subtitle">{props.numstring}</div>
            </div> 
        </div>
    </div>
)

export default Card