import { useState } from "react";
import "./App.css";
import Intro from './components/Intro'
import Questions from './components/Questions'

function App() {

  const [hasStarted, setHasStarted] = useState(false);
  
  return (
    <div>
      <Intro startTest={() => setHasStarted(true)} />
      
    </div>
  );
}

export default App;
