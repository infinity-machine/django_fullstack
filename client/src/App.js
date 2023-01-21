import { fetchData, postData } from './utils/api'
import { useState, useEffect } from 'react'

function App() {
  const [ input, setInput ] = useState('')
  const [ user, setUser ] = useState({
    name: 'Connor'
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // postData(input, user.name)
    console.log(input)
    setInput('')
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={input}
          onChange={handleInputChange}/>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
