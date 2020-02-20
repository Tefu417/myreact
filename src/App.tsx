import React from 'react';
import './App.css';

import ColorfulMsg from "./components/ColorfulMsg";
import CountButton from "./components/CountButton";

const msgStyle = {
  color: 'blue'
};

const App = () => {
  return (
    <>
      <h1 style={msgStyle}>はじめてのReact</h1>
      <ColorfulMsg color = "blue">Reactは難しくないよ</ColorfulMsg>
      <ColorfulMsg color = "green">Reactは難しくないよ</ColorfulMsg>
      <ColorfulMsg color = "red">Reactは難しくないよ</ColorfulMsg>
      <CountButton />
    </>
  );
}

export default App;

