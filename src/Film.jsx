import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import loader from './assets/loader.svg';

export const Film = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
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
		{data ?
			<>
				<h1>{data.title}</h1>
				<p>{data.director}</p>
				<p>{data.producer}</p>
				<p>{data.release_date}</p>
				<p>characters</p>
        {data.characters.map(character => (
          <a style={{display: 'block'}} href={character}>{character}</a>
        ))}
				<p>planets</p>
        {data.planets.map(planet => (
          <a style={{display: 'block'}}>{planet}</a>
        ))}
        <p>starships</p>
        {data.starships.map(starship => (
          <a style={{display: 'block'}}>{starship}</a>
        ))}
				<p>vehicles</p>
        {data.vehicles.map(vehicle => (
          <a style={{display: 'block'}}>{vehicle}</a>
        ))}
				<p>species</p>
        {data.species.map(specie => (
          <a style={{display: 'block'}}>{specie}</a>
        ))}
			</> :
      <div className='loader-container'>
        <img className='loader' src={loader} />
      </div>
		}
    </div>
  )
}

export default Film;