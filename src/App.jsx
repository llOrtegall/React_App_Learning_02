import { useEffect, useState } from "react";
import "./styles.css";

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
const CAT_API_IMAGE_URL = `https://cataas.com/cat/says/?size=:size&color=:color&json=true`;
const CAT_PREFIX_RENDER_URL = `https://cataas.com/`;

export function App() {
  const [fact, setFact] = useState();
  const [imageurl, setImageurl] = useState();

  //para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      // *TODO: handle error if !res.status
      .then((data) => {
        const { fact } = data;
        setFact(data.fact);
      });
  }, []);

  //para cada la imagen una cita nueva
  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(" ", 3);
    //? hacemos el segundo fecth de datos
    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=:size&color=:color&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageurl(`${url}`);
      });
  }, [fact]);

  return (
    <main>
      <h1>App De Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageurl && (
        <img
          src={`${CAT_PREFIX_RENDER_URL}${imageurl}`}
          alt={`image extrated ${fact}`}
        />
      )}
    </main>
  );
}
