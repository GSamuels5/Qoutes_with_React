import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addQuote } from './redux/quote';
import './App.css';

function App() {
  // set a State for new qoute input
  const [newQuote, setNewQoute] = useState('')

  // get the qoutes from redux store
  const quotes = useSelector((state) => state.quotes.quotes);

// set up the dispatch function
const dispatch = useDispatch();

const handleQuote = () =>{
  if (newQuote.trim() !== ""){
    dispatch(addQuote(newQuote));
    setNewQoute('')
  }
}
  return (
    <div className="App">
  
       <h1>Quote creator</h1>
       <input type='text'
       value={newQuote}
       onChange={(e) =>setNewQoute(e.target.value)}
       placeholder='Enter a new quote'/>
       
<button onClick={handleQuote}>Add a Quote</button>
<div>
  <h2>Quote:</h2>
  <ul>
    {quotes.map((quote, index) =>(
      <li key={index}>{quote}</li>
    ))}
  </ul>
</div>

    </div>
  );
}

export default App;
