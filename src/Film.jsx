import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import loader from './assets/images/loader.svg';

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

  const getIdFromLink = (url) => {
    // const str = new URL(url).pathname.split('/').filter(Boolean).pop();
    const str = new URL(url).pathname.split('/').filter(Boolean).pop();
    // const str = url.substring(url.lastIndexOf('/') + 1)
    console.log("str => ", str);
    return str
  }

  return (
    <div className="section">
		{data ?
			<>
				<h1 className="title">{data.title}</h1>
        <hr className='horizontal-line'/>
				<p>{data.director}</p>
				<p>{data.producer}</p>
				<p>{data.release_date}</p>
        <hr className='horizontal-line'/>
				<p>characters</p>
        {data.characters.map(character => (
          // <a style={{display: 'block'}} href={character}>{character}</a>
          <Link style={{display: 'block'}} to={`/character/` + getIdFromLink(character)}>{character}</Link>
        ))}
				{/* <p>planets</p>
        {data.planets.map(planet => (
          // <a style={{display: 'block'}}>{planet}</a>
          <p>{ planet }</p>
        ))}
        <p>starships</p>
        {data.starships.map(starship => (
          // <a style={{display: 'block'}}>{starship}</a>
          <p>{ starship }</p>
        ))}
				<p>vehicles</p>
        {data.vehicles.map(vehicle => (
          // <a style={{display: 'block'}}>{vehicle}</a>
          <p> { vehicle }</p>
        ))}
				<p>species</p>
        {data.species.map(specie => (
          // <a style={{display: 'block'}}>{specie}</a>
          <p> { specie }</p>
        ))} */}
			</> :
      <div className='loader-container'>
        <img className='loader' src={loader} />
      </div>
		}
    </div>
  )
}

export default Film;