import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//TODO: plugin traido con npm install @vitejs/plugin-react -E
//* Esta config la he sacado de la pagina official de vite
//* https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react

export default defineConfig({
  plugins: [react()],
});


// ? Existe la posibilidad de hacerlo sin plugins sin embargo lo que las 
// ? entrevistan quieren ver es; si eres capaz de crear el punto de entrada de la 
// ? aplicación de React