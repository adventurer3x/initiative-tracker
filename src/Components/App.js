import React, { Component } from 'react';
import '../Content/App.css';
import InitiativeList from './InitiativeList';
import NewCharacterForm from './NewCharacterForm';

//App module for handling the app data state and components
class App extends Component {
  state = {
    characters: [
      {
        name: "Thorin Strongbeard",
        order: 4,
        charImg: "https://i.pinimg.com/736x/7c/c7/aa/7cc7aa6b6fd0d30b2ab78eabcd44c94e--dwarf-apocalypse.jpg",
        armor:16,
        health: 25,
        attack: "+7, 2d6+4"
      },
      {
        name: "Minotaur",
        order: 3,
        charImg: "https://s-media-cache-ak0.pinimg.com/originals/20/ee/fc/20eefc59de0bd9d75a2b4889c18504bc.png",
        armor:14,
        health: 32,
        attack: "+8, 1d10+5"
      },
      {
        name: "Elrik Battleborne",
        order: 5,
        charImg: "https://i.pinimg.com/originals/6c/0a/f9/6c0af91e8c7b7c8607091a755dcc483c.png",
        armor:18,
        health: 28,
        attack: "+6, 2d6+4 +1d4 fire"
      },
    ],
    charList: [],
    charListIndex: 0
  }

  render() {
    return (
      <div className="App container-fluid text-center">
        <header className="navbar navbar-dark bg-dark">
          <span className="navbar-brand">Welcome to Initiative-Tracker</span>
          <i className="fa fa-spinner fa-pulse" style={{ color: '#FFF' }}></i>
        </header>
        <InitiativeList chars={this.state.charList} updateCharList={this.updateCharList} />
        <NewCharacterForm onSubmit={this.addNewChar} />
      </div>
    )
  }

  componentWillMount() {
    const beg = 0;
    const end = 7;

    this.setState({
      charList: this.sortCharList(this.state.characters).slice(beg, end)
    })
  }

  addNewChar = (charInput) => {

    charInput.charImg = this.checkCharImg(charInput.charImg);

    this.setState(prevState => ({
      characters: prevState.characters.concat(charInput)
    }))

    this.refreshCharList(0, 7);
  };

  refreshCharList = (beg, end) => {
    this.setState(prevState => ({
      charList: this.sortCharList(prevState.characters).slice(beg, end),
      charListIndex: 0
    }))
  }

  checkCharImg = (charImg) => {
    if (charImg === '') {
      return "http://vopool.net/images/diger.png";
    }
    return charImg;
  };

  updateCharList = (direction) => { //remove character and add next character
    switch (direction) {
      case 'forward':
        this.incrementCharList();
        break;
      case 'back':
        this.decrementCharList();
        break;
    }
  };

  incrementCharList = () => {
    const {characters, charList, charListIndex} = this.state;

    let tempList = charList;
    tempList.shift();

    let increment = this.resetIndex();

    tempList.push(characters[charListIndex]);

    this.setState(prevState => ({
      charList: tempList,
      charListIndex: prevState.charListIndex + increment
    }))
  };

  decrementCharList = () => {
    const {characters, charList, charListIndex} = this.state;

    let tempList = charList;
    tempList.pop();

    let newIndex = charListIndex - 1;

    if (newIndex === -1) {
      newIndex = characters.length - 1;
    }

    tempList.unshift(characters[newIndex]);

    this.setState(prevState => ({
      charList: tempList,
      charListIndex: newIndex
    }))
  };

  resetIndex = () => {
    let len = this.state.characters.length - 1;
    let curInd = this.state.charListIndex;

    if (curInd === len) {
      this.setState(prevState => ({
        charListIndex: 0
      }))
      return 0;
    }
    return 1;
  }

  sortCharList = (charList) => {
    return charList.sort(function (a, b) {
      return a.order - b.order
    });
  }

  removeChar = (index) => {
    this.setState(prevState => ({
      charList: prevState.charList.filter((_, i) => i !== index)
    }))

    this.updateCharList();
  };
}

export default App;