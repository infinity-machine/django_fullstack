// import { fetchData, postData } from './utils/api'
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [ input, setInput ] = useState('');
  const [data, setData] = useState(null);

  const postData = (boi_name) => {
    const data = {
      name: boi_name
    };
    axios.post('http://localhost:8000/api/', data);
    window.location.reload()
  }

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/api/');
    const data = response.data;
    return data;
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
