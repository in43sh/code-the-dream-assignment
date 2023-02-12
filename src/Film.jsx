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
    const str = new URL(url).pathname.split('/').filter(Boolean).pop();
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
            <Link className='data__link' style={{display: 'block'}} to={`/character/` + getIdFromLink(character)}>{getIdFromLink(character)}</Link>
          ))}
        </div>
			</> :
      <div className='loader-container'>
        <Loader backgroundDark={ backgroundDark } />
      </div>
		}
    </Section>
  )
}

export default Film;