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
    window.location.reload();
  };

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/api/');
    const data = response.data;
    return data;
  };

  const handleDelete = () => {
    console.log('ok');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(input);
    setInput('');
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    fetchData()
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <p>ADD A BOI TO THE LIST</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={input}
          onChange={handleInputChange}/>
        <button>SUBMIT</button>
      </form>
      <h1>BOI LIST</h1>
      {
        data ? data.map((data, index) => {
          return (
            <div key={index}>
              <h2>{data.name}</h2>
              <button onClick={handleDelete}>DELETE</button>
            </div>
          )
        }) : <h2>NO BOIS AVAILABLE</h2>
      }
    </div>
  );
}

export default App;
