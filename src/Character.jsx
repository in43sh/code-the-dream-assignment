import { useState, useEffect } from 'react'

export const Character = () => {
  const localData = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
  }

  // const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {data => {
    setData(localData)
  }})

  // useEffect(() => {
  //   fetch("https://swapi.dev/api/people/1")
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       }
  //       throw response;
  //     })
  //     .then(data => {
  //         setData(data)
  //         console.log("data => ", data);
  //     })
  //     .catch(error => {
  //         console.error("Error fetching data => ", error)
  //         setError(error);
  //       }
  //     )
  //     .finally(() => {
  //       setLoading(false);
  //     })
  // }, []);

  return (
    <div className="App">
      {/* <h1>{data.name}</h1>
      <p>{data.height}</p>
      <p>{data.mass}</p>
      <p>{data.hair_color}</p>
      <p>{data.eye_color}</p>
      <p>{data.skin_color}</p>
      <p>{data.birth_year}</p>
      <p>{data.gender}</p>
      <p>{data.homeworld}</p>
      <p>{data.films}</p>
      <p>{data.species}</p>
      <p>{data.starships}</p>
      <p>{data.vehicles}</p> */}
      <h1>{localData.name}</h1>
      <p>{localData.height}</p>
      <p>{localData.mass}</p>
      <p>{localData.hair_color}</p>
      <p>{localData.eye_color}</p>
      <p>{localData.skin_color}</p>
      <p>{localData.birth_year}</p>
      <p>{localData.gender}</p>
      <p>{localData.homeworld}</p>
      <p>{localData.films}</p>
      <p>{localData.species}</p>
      <p>{localData.starships}</p>
      <p>{localData.vehicles}</p>
    </div>
  )
}

export default Character;