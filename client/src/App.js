import { fetchData, postData } from './utils/api'
import { useState, useEffect } from 'react'

function App() {
  const [ input, setInput ] = useState('');
  const [ user, setUser ] = useState({
    name: 'Connor'
  });
  const [data, setData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // postData(input, user.name);
    console.log(input);
    setInput('');
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const renderData = (data) => {
    console.log(data)
  }

  useEffect(() => {
    fetchData()
      // .then(data => console.log(data));
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={input}
          onChange={handleInputChange}/>
        <button>SUBMIT</button>
      </form>
      <div></div>
    </div>
  );
}

export default App;
