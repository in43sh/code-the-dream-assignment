import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { Loader } from './Loader';

const Section = styled.div`
  background-color: ${(({ backgroundDark }) => (backgroundDark ? "var(--color-primary)" : "var(--color-secondary)"))};
  color: ${(({ backgroundDark }) => (backgroundDark ? "var(--color-secondary" :"var(--color-primary)"))};
`

export const Character = ({ backgroundDark }) => {
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
    const str = new URL(url).pathname.split('/').filter(Boolean).pop();
    console.log("str => ", str);
    return str
  }

  return (
    <Section backgroundDark={backgroundDark} className="section">
      {data ?
      <>
        <h1 className="title">{data.name}</h1>
        <hr className='horizontal-line'/>
        <div className='data'>
          <p className='data__content'>Height</p>
          <p className='data__content'>Mass</p>
          <p className='data__content'>Hair color</p>
          <p className='data__content'>{data.height}</p>
          <p className='data__content'>{data.mass}</p>
          <p className='data__content'>{data.hair_color}</p>
          <p className='data__content'>Eye color</p>
          <p className='data__content'>Birth Year</p>
          <p className='data__content'>Gender</p>
          <p className='data__content'>{data.eye_color}</p>
          <p className='data__content'>{data.birth_year}</p>
          <p className='data__content'>{data.gender}</p>
        </div>
        <hr className='horizontal-line'/>
        <p>films</p>
        <div className='data'>
          {data.films.map(film => (
            <Link className='data__link--character' style={{display: 'block'}} to={`/film/` + getIdFromLink(film)}>{ film }</Link>
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

export default Character;