import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { HorizontalLine } from "./HorizontalLine";
import { Loader } from "./Loader";

const Section = styled.div`
  position: relative;
  background-color: ${({ backgroundDark }) =>
    backgroundDark ? "var(--color-primary)" : "var(--color-secondary)"};
  color: ${({ backgroundDark }) =>
    backgroundDark ? "var(--color-secondary" : "var(--color-primary)"};
`;

export const Film = ({ backgroundDark }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // decided to take a different approach with checking if
  // the data was loaded but want to keep this to try in the future
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setData(data))
      .catch((error) => {
        // console.error("Error fetching data => ", error)
        setError(error);
      });
    // .finally(() => {
    //   setLoading(false);
    // })
  }, []);

  const getIdFromLink = (url) => {
    const str = new URL(url).pathname.split("/").filter(Boolean).pop();
    // console.log("str => ", str);
    return str;
  };

  return (
    <Section backgroundDark={backgroundDark} className="section">
      {data ? (
        <>
          <h1 className="title">{data.title}</h1>
          <HorizontalLine size={75} backgroundDark={backgroundDark} />
          {/* <HorizontalLine backgroundDark={backgroundDark} /> */}
          <div className="data">
            <p className="data__content bold">Director</p>
            <p className="data__content bold">Producer</p>
            <p className="data__content bold">Release date</p>
            <p className="data__content">{data.director}</p>
            <p className="data__content">{data.producer}</p>
            <p className="data__content">{data.release_date}</p>
          </div>
          <HorizontalLine size={100} backgroundDark={backgroundDark} />
          {/* <HorizontalLine backgroundDark={backgroundDark} /> */}
          <p className="data__content list__title">Characters</p>
          <div className="list">
            {data.characters.map((character) => (
              <Link
                key={getIdFromLink(character)}
                className="data__link"
                style={{ display: "block", color: "var(--color-secondary)" }}
                to={`/character/` + getIdFromLink(character)}
              >
                {getIdFromLink(character)}
              </Link>
            ))}
          </div>
          <HorizontalLine size={100} backgroundDark={backgroundDark} />
          {/* <HorizontalLine backgroundDark={backgroundDark} /> */}
        </>
      ) : error ? (
        <p className="error">Error {error.status}</p>
      ) : (
        <div className="loader-container">
          <Loader backgroundDark={backgroundDark} />
        </div>
      )}
    </Section>
  );
};

export default Film;
