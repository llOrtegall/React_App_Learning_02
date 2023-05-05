import { useEffect, useState } from "react";

const CAT_ENDPOINT_RAMDON_FACT = `https://catfact.ninja/fact`;
const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/hello?size=50&color=red&json=true`;

function App() {
  
  const [fact, setFact] = useState();

  /* Este se ejecuta cada vez que se renderiza el componente */
  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDON_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  );
}

export default App;
