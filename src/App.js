import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './Button/DrawButton';
import firebase from 'firebase/app';
import 'firebase/database';

import { DB_CONFIG } from './Config/firebase/dbconfig';

class App extends Component {
  constructor(props) {
    super(props); //super is used to create the abstraction connection needed to use the this object
    this.app = firebase.initializeApp(DB_CONFIG);
    // https://react-flashcards-d0224.firebaseio.com/ location of json file
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);//click handler

    this.state = {
      cards: [],
      currentCard: {}
    }
  }
  //Example of a lifecycle methods
  //This is a stateful component btw
  //This will exisit with this component when it is about to mount
  componentWillMount() {
    const currentCards = this.state.cards;
    this.database.on('child_added', snap => { //.on child is a firebase method a snapshot of data is returned with this 
      currentCards.push({//oush that data from the database onto the current cards
        id: snap.key,
        num: snap.val().num,
        numstring: snap.val().numstring
      })
      this.setState({ //set state is inside of the on child added method
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })      
    })

  }



  //getRandom method
  getRandomCard(currentCards) {
    //2 cards multplied by some number between 0 and 1 then rounded up.
    //The number 0 or 1 will return which will corresponds with the first or second card in the cards array
    let card = currentCards[Math.floor(Math.random() * currentCards.length)]; return (card);
  }

  updateCard(){ //set it to update the card that is on the screen
    const currentCards= this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
}
  



//Drawbutton is where we call a method to draw a card 
// when the prop draw card is called in the drawCard
//compnent it will be invoked in the App component
  render() {
    return (
      <div className="App">
        <div className="gameHeader">
          <h1>Flashie</h1>
          <h4>Flashcards for toddlers</h4>
        </div>
        <div className="cardRow"> 
          <Card id={this.state.currentCard.id}
                num={this.state.currentCard.num}
                numstring={this.state.currentCard.numstring}
                />
            <div className="buttonRow">
             <DrawButton drawCard={this.updateCard} />     
           </div>
        </div>
      </div>
    );
  }
}

export default App;
