import React, { Component } from 'react';
// import { Sample } from './Components/Screen/Sample';
// import { Word } from './Components/Shared/Word';
// import { ListWord } from './Components/Screen/ListWord';
import {StateExam}  from './Components/Screen/StateExample'


class App extends Component {
  // render() {
  //   const word1= {en:"One",vn:"Mot", isMemorized: true}
  //   const word2= {en:"Two" ,vn:"Hai",isMemorized: false}
  //   const word3= {en:"Three" ,vn:"Ba",isMemorized: true}
  //   return (
  //     <div className="App">
  //       <Word wordInfo = {word1}/>
  //       <Word wordInfo = {word2}/>
  //       <Word wordInfo = {word3}/>
  //     </div>
  //   );
  // }
  render() {
    return <StateExam />
  }
}

export default App;
