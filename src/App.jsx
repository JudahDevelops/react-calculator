import { useState } from 'react'
import './App.css'
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Calculator />
    )
  }

}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const top = document.getElementById('full');
    const bottom = document.getElementById('eval');

    switch(event.target.id) {
      case 'AC':
        top.innerText = '';
        bottom.innerText = '0';
        break;
      case '=':
        bottom.innerText = eval(top.innerText);
        top.innerText += `=${eval(top.innerText)}`;
        break;
      case '/':
      case '*':
      case '+':
        bottom.innerText = event.target.id;
        if (top.innerText[top.innerText.length - 1] === '/' || top.innerText[top.innerText.length - 1] === '*' || top.innerText[top.innerText.length - 1] === '+' || top.innerText[top.innerText.length - 1] === '-') {
          switch (event.target.id) {
            case '/':
              top.innerText = top.innerText.slice(0, top.innerText.length - 1) + '/';
              break;
            case '*':
              top.innerText = top.innerText.slice(0, top.innerText.length - 1) + '*';
              break;
            case '+':
              top.innerText = top.innerText.slice(0, top.innerText.length - 1) + '+';
              break;
          }
        } else if (top.innerText.indexOf('=') !== -1) {
          top.innerText = top.innerText.slice(top.innerText.indexOf('=') + 1) + event.target.id;
        } else {
          top.innerText += event.target.id;
        }
        break;
      case '-':
        bottom.innerText = event.target.id;
        if (top.innerText[top.innerText.length - 1] === '/' || top.innerText[top.innerText.length - 1] === '*' || top.innerText[top.innerText.length - 1] === '+') {
          top.innerText += '-';
        } else if (top.innerText.indexOf('=') !== -1) {
          top.innerText = top.innerText.slice(top.innerText.indexOf('=') + 1) + event.target.id;
        } else {
          top.innerText += event.target.id;
        }
        break;
      default:
        if (bottom.innerText[bottom.innerText.length - 1] === '/' || bottom.innerText[bottom.innerText.length - 1] === '*' || bottom.innerText[bottom.innerText.length - 1] === '+' || bottom.innerText[bottom.innerText.length - 1] === '-' || bottom.innerText[bottom.innerText.length - 1] === '0' || top.innerText.includes('=')) {
          bottom.innerText = '';
        }
        if (top.innerText.includes('=')) {
          top.innerText = event.target.id;
        } else {
          top.innerText += event.target.id;
        }
        if (bottom.innerText.length === 22) {
          let placeholder = bottom.innerText;
          bottom.innerText = 'DIGIT LIMIT MET'
          setTimeout(() => {
            bottom.innerText = placeholder;
          }, 1000);
        } 
        
        bottom.innerText += event.target.id;
        break;
    }
  }



  render() {
    return (
      <div id='calculator-cont'>
        <div id='display'>
          <div id='full'></div>
          <div id='eval'>0</div>
        </div>
        <div id='buttons'>
          <div class='row' id='row1'>
            <button onClick={this.handleClick} class='wider red' id='AC'>AC</button>
            <button onClick={this.handleClick} class='lighter' id='/'>/</button>
            <button onClick={this.handleClick} class='lighter' id='*'>x</button>
          </div>
          <div class='row' id='row2'>
            <button onClick={this.handleClick}  id='7'>7</button>
            <button onClick={this.handleClick}  id='8'>8</button>
            <button onClick={this.handleClick}  id='9'>9</button>
            <button onClick={this.handleClick}  class='lighter' id='-'>-</button>
          </div>
          <div class='row' id='row3'>
            <button onClick={this.handleClick}  id='4'>4</button>
            <button onClick={this.handleClick}  id='5'>5</button>
            <button onClick={this.handleClick}  id='6'>6</button>
            <button onClick={this.handleClick}  class='lighter' id='+'>+</button>
          </div>
          <div class='row' id='row4'>
            <div id='left4'>
              <div id='top'>
                <button onClick={this.handleClick}  id='1'>1</button>
                <button onClick={this.handleClick}  id='2'>2</button>
                <button onClick={this.handleClick}  id='3'>3</button>
              </div>
              <div id='bottom'>
                <button onClick={this.handleClick}  class='wider' id='0'>0</button>
                <button onClick={this.handleClick}  id='.'>.</button>
              </div>
            </div>
            <div id='right4'>
              <button onClick={this.handleClick}  class='taller blue' id='='>=</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
