import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { HorizontalLine } from './HorizontalLine';
import { Loader } from './Loader';

const Section = styled.div`
  background-color: ${(({ backgroundDark }) => (backgroundDark ? "var(--color-primary)" : "var(--color-secondary)"))};
  color: ${(({ backgroundDark }) => (backgroundDark ? "var(--color-secondary" : "var(--color-primary)"))};
`

export const Character = ({ backgroundDark }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // decided to take a different approach with checking if
  // the data was loaded but want to keep this to try in the future
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => setData(data))
      .catch(error => {
        console.error("Error fetching data => ", error)
        setError(error);
      })
      // .finally(() => {
      //   setLoading(false);
      // })
  }, []);

  const getIdFromLink = (url) => {
    const str = new URL(url).pathname.split('/').filter(Boolean).pop();
    // console.log("str => ", str);
    return str
  }

  return (
    <Section backgroundDark={backgroundDark} className="section">
      {data ?
      <>
        <h1 className="title">{data.name}</h1>
        <HorizontalLine backgroundDark={backgroundDark} />
        <div className='data'>
          <p className='data__content bold'>Height</p>
          <p className='data__content bold'>Mass</p>
          <p className='data__content bold'>Hair color</p>
          <p className='data__content'>{data.height}</p>
          <p className='data__content'>{data.mass}</p>
          <p className='data__content'>{data.hair_color}</p>
          <p className='data__content bold'>Eye color</p>
          <p className='data__content bold'>Birth Year</p>
          <p className='data__content bold'>Gender</p>
          <p className='data__content'>{data.eye_color}</p>
          <p className='data__content'>{data.birth_year}</p>
          <p className='data__content'>{data.gender}</p>
        </div>
        <HorizontalLine backgroundDark={backgroundDark} />
        <p className='data__content'>Films</p>
        <div className='list'>
          {data.films.map(film => (
            <Link className='data__link' style={{display: 'block', color: 'var(--color-primary)'}} to={`/film/` + getIdFromLink(film)}>{ getIdFromLink(film) }</Link>
          ))}
        </div>
       </> : error ? <p className='error'>Error { error.status }</p> : <div className='loader-container'>
        <Loader backgroundDark={ backgroundDark } />
       </div>
      }
    </Section>
  )
}

export default Character;