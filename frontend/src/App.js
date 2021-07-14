import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([])
  useEffect(() =>{
    async function fetchItems(){
      await fetch(`http://localhost:3001/items`)
      .then(res => res.json())
      .then(json => setItems([...json]))
    }
    fetchItems()
  }, [])

async function submit(e){
  e.preventDefault()
  console.log(e.target.texta.value)
  let requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      comment: e.target.texta.value
    })
  }
  await fetch('http://localhost:3001/items', requestOptions)
  //console.log(requestOptions.body)
}
console.log(items)

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={submit}>
        <input type="text" id="texta" className="texta" />
        <button type="submit" >Submit</button>
      </form>
    
      {items.map(item =>{
        return(
          <p>{item.comment}</p>
        )
      })}
      </header>
    </div>
  );
}

export default App;
