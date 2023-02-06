import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import loader from './assets/loader.svg';

export const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
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
        // setTimeout(() => {
        //   setData(data)
        //   console.log("Delayed for 10 second.");
        // }, "1000")
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
        <p>homeworld</p>
        <a href={data.homeworld}>{data.homeworld}</a>
        <p>films</p>
        {data.films.map(film => (
          <a style={{display: 'block'}} href={film}>{film}</a>
        ))}
				<p>species</p>
        {data.species.map(specie => (
          <a style={{display: 'block'}}>{specie}</a>
        ))}
        <p>starships</p>
        {data.starships.map(starship => (
          <a style={{display: 'block'}}>{starship}</a>
        ))}
				<p>vehicles</p>
        {data.vehicles.map(vehicle => (
          <a style={{display: 'block'}}>{vehicle}</a>
        ))}
       </> :
       <div className='loader-container'>
        <img className='loader' src={loader} />
       </div>
      }
    </div>
  )
}

export default Character;