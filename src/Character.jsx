import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import loader from './assets/images/loader.svg';

export const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [dataFromLink, setDataFromLink] = useState(null);
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
          setData(data)
          console.log("data => ", data);
      })
      .catch(error => {
        console.error("Error fetching data => ", error)
        setError(error);
      })
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
      {/* <button onClick={() => fetchDataAboutUrl("https://swapi.dev/api/films/1/")}>click</button> */}
      {data ?
      <>
        <h1 className="title">{data.name}</h1>
        <hr className='horizontal-line'/>
        <p>{data.height}</p>
        <p>{data.mass}</p>
        <p>{data.hair_color}</p>
        <p>{data.eye_color}</p>
        <p>{data.skin_color}</p>
        <p>{data.birth_year}</p>
        <p>{data.gender}</p>
        <hr className='horizontal-line'/>
        <p>films</p>
        {data.films.map(film => (
          <Link style={{display: 'block'}} to={`/film/` + getIdFromLink(film)}>{ film }</Link>
        ))}
				{/* <p>species</p>
        {data.species.map(specie => (
          <p>{ specie }</p>
        ))}
        <p>homeworld</p>
        <p>{ data.homeworld }</p>
        <p>starships</p>
        {data.starships.map(starship => (
          <p>{ starship }</p>
        ))}
				<p>vehicles</p>
        {data.vehicles.map(vehicle => (
          <p>{ vehicle }</p>
        ))} */}
       </> :
       <div className='loader-container'>
        <img className='loader' src={loader} />
       </div>
      }
    </div>
  )
}

export default Character;