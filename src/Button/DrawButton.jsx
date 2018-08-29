import React, { Component } from 'react';
import './Drawbutton.css';

class DrawButton extends Component {
    constructor(props){
        super(props);//making the call to the parent
        this.drawCard = this.drawCard.bind(this);
    }    
    drawCard(){
        this.props.drawCard();
    }
    render(props){
        return (
            <div className="buttonContainer">
                <button className="btn" onClick={this.drawCard}>Next Card</button>
            </div>
        )
    }
}

export default DrawButton