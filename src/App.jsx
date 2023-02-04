import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
          setData(data)
          console.log("data => ", data);
      })
      .catch(error => {
          console.error("Error fetching data => ", error)
          setError(error);
        }
      )
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <div className="App">
      <h1>{data.name}</h1>
      <p>{data.height}</p>
      <p>{data.mass}</p>
      <p>{data.hair_color}</p>
      <p>{data.eye_color}</p>
      <p>{data.skin_color}</p>
      <p>{data.birth_year}</p>
      <p>{data.gender}</p>
      <p>{data.homeworld}</p>
      <p>{data.films}</p>
      <p>{data.species}</p>
      <p>{data.starships}</p>
    </div>
  )
}

export default App
