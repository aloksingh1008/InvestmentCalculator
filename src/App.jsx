import { useState } from "react";
import Inputfield from './components/Inputfield.jsx'
import Results from './components/Results.jsx'
function App() {
  const [para, setPara] = useState({
    'initial': 15000,
    'annual': 1200,
    'return': 6,
    'duration': 10,
  });
  function updatePara(tochange, event) {
    setPara((prevPara) => {
      return {
        ...prevPara,
        [tochange]:+event.target.value,
      }
    });
  }
  const isInputValid=para.duration>0;
  return (
    <>
      <Inputfield para={para} handleChange={updatePara} />
      {!isInputValid && <p className="center">Please enter correct Duration...</p>}
      {isInputValid && <Results para={para} />}
    </>
  );
}

export default App;
