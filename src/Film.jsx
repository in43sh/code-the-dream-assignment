import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from './Loader';

const Section = styled.div`
  background-color: ${(({ backgroundDark }) => (backgroundDark ? "var(--color-primary)" : "var(--color-secondary)"))};
  color: ${(({ backgroundDark }) => (backgroundDark ? "var(--color-secondary" :"var(--color-secondary)"))};
`

export const Film = ({ backgroundDark }) => {
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
    <Section backgroundDark={backgroundDark} className='section'>
		{data ?
			<>
				<h1 className="title">{data.title}</h1>
        <hr className='horizontal-line'/>
				<div className='data'>
          <p className='data__content'>Director</p>
          <p className='data__content'>Producer</p>
          <p className='data__content'>Release date</p>
          <p className='data__content'>{data.director}</p>
          <p className='data__content'>{data.producer}</p>
          <p className='data__content'>{data.release_date}</p>
        </div>
        <hr className='horizontal-line'/>
				<p className='data__content'>Characters</p>
        <div className='list'>
          {data.characters.map(character => (
            // <a style={{display: 'block'}} href={character}>{character}</a>
            <Link className='data__link' style={{display: 'block'}} to={`/character/` + getIdFromLink(character)}>{getIdFromLink(character)}</Link>
          ))}
        </div>
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
        {/* <img className='loader' src={loader} /> */}
        <Loader backgroundDark={ backgroundDark } />
      </div>
		}
    </Section>
  )
}

export default Film;