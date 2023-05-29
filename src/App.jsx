import { useEffect, useState } from "react";
import "./App.css";

//TODO: Es buena practica tener en constante la API */
const CAT_ENDPOINT_RAMDON_FACT = `https://catfact.ninja/fact`;
// TODO: const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  /* Este se ejecuta cada vez que se renderiza el componente */
  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDON_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        /* con el split extreamos mediate el param la palabra en este caso por cada espacio 
        el slice es para obtener un rango de palabras que quieras extraer y el join es para 
        concatenar lo extraido ya por el split */
      });
  }, []);

  //para recuperar la imagen
  useEffect(() => {
    if (!fact) return;
    const threeFirtsWords = fact.split(" ", 3).join(" ");
    console.log(threeFirtsWords);
    fetch(
      `https://cataas.com/cat/says/${threeFirtsWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
            alt={`image extracted using the first three wrid for ${fact}`}
          />
        )}
      </section>
    </main>
  );
}

export default App;
