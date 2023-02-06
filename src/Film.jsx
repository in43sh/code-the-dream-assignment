import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

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
				<p>{data.characters}</p>
				<p>{data.planets}</p>
				<p>{data.starships}</p>
				<p>{data.vehicles}</p>
				<p>{data.species}</p>
			</> : <h1>loading</h1>
		}
    </div>
  )
}

export default Film;