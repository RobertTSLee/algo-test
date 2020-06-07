import React from 'react';

import './App.css';

import Board from './board/board';
import ToolBar from './toolbar/toolbar';

let sizeX = 0;
let sizeY = 0;

let onSizeXChange = (size:number) => {
  sizeX = size;
}

let onSizeYChange = (size:number) => {
  sizeY = size;
}

// TODO: render board nodes on size changes
function App() {
  return (
    <div className="App" key='App'>
      <header className="App-header">
        <ToolBar title='Hello Board' onSizeXChange={onSizeXChange} onSizeYChange={onSizeYChange}/>
      </header>

      <Board sizeX={20} sizeY={10} key='App-board'/>
    </div>
  );
}

export default App;
