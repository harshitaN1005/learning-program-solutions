import React, {useState} from 'react';
import CurrencyConvertor from './currencyConvertor';
import './App.css';
function App() {

  const [count, setCount] = useState(0);
  

  const handleIncrement = () => {
    const cnt = count + 1;
    setCount(cnt);
    alert(`Hello!! Member ${cnt}`);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  const sayWelcome = (message) => {
    alert(`You clicked: ${message}`);
  };

  return (
    <>
    <div className = "App">
      <p>Count: {count}</p>
      <button onClick={handleIncrement}> increment </button>
      <br/>
      <br/>
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
      <br/>
      <br/>
      <button onClick={handleDecrement}> decrement </button>
      <br/>
      <br/>
      <button onClick={(e) => alert('I was clicked')}>click on me</button>
      <CurrencyConvertor/>

    </div>
    
    </>
    
  )

}
export default App;