// import { fetchData, postData } from './utils/api'
import { useState, useEffect } from 'react'

function App() {
  const [ input, setInput ] = useState('');
  const [data, setData] = useState(null);

  const postData = (boi_name) => {
    const data = {
      "name": `${boi_name}`
    }
    fetch('/api/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }

  const fetchData = async () => {
    const response = await fetch('/api', {
      method: 'GET'
    });
    const data = await response.json()
    return data
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(input);
    setInput('');
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    fetchData()
      .then(data => setData(data));
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
      {
        data ? data.map((data, index) => {
          return (
            <div key={index}>
              <p>{data.name}</p>
            </div>
          )
        }) : <></>
      }
    </div>
  );
}

export default App;
