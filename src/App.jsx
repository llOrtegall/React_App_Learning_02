import { useEffect, useState } from "react";

/* Es buena practica tener en constante la API */
const CAT_ENDPOINT_RAMDON_FACT = `https://catfact.ninja/fact`;
//const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

function App() {
  const [fact, setFact] = useState();

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
        
        const firstWord = fact.split(" ", 3).join(" ");
        console.log(firstWord);
      });
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  );
}

export default App;
