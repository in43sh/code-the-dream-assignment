import { useState, useEffect } from 'react'
import loader from './assets/loader.svg';

export const Character = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        // setTimeout(() => {
        //   console.log("Delayed for 1 second.");
        // }, "10000")
        setTimeout(() => {
          setData(data)
          console.log("Delayed for 10 second.");
        }, "1000")
          // setData(data)
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
      {data ?
       <>
        <h1>{data.name}</h1>
        <p>{data.height}</p>
        <p>{data.mass}</p>
        <p>{data.hair_color}</p>
        <p>{data.eye_color}</p>
        <p>{data.skin_color}</p>
        <p>{data.birth_year}</p>
        <p>{data.gender}</p>
        <p>{data.homeworld}</p>
        {data.films.map(film => (
          <a style={{display: 'block'}} href={film}>{film}</a>
        ))}
        <p>{data.species}</p>
        <p>{data.starships}</p>
        <p>{data.vehicles}</p>
       </> :
       <div className='loader-container'>
        <img className='loader' src={loader} />
       </div>
      }
    </div>
  )
}

export default Character;