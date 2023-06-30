// Write your Color component here
import Color from "./component/Color";
import { useState } from "react";
import Navbar from "./component/Navbar";

const App = () => {

  const [selectedColor, setSelectedColor] = useState('none') // set to none for styling 

  return (
    <div id="container">
      <div id="navbar">
        <Navbar selectedColor={selectedColor} />
      </div>
      <div id="colors-list">
        <Color color="violet" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="grey" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};



export default App;
