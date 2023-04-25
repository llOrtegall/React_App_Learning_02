este proyecto lo creo con la finalidad de medir mis conocimientos en React libreria que llevo estudiando 
por 3 meses y con la cual deseo mejorar mis habilidades para trabajar en un futuro en la industria del desarrollo web


1° proyecto creado con vite, sin embargo la idea es realziar el punto de entrada de forma manual, con el fin de tener este conocimiento
claro para inicializar el proyecto con React.

- usamos de primero: npm create vite@latest
- Selecionamos Vanilla
- seleccionamos JavaScript o typeScript

<!-- ? 2° continuamos con la instalación del plugin de react el cual se hace con: -->

 - npm install @vitejs/plugin-react -E

<!-- ? 3° dependencias de React  -->
 - react 
 - react-dom

<!-- *TODO:   example: npm install react react-dom -E -->

<!-- ? 4° creamos archivo de config vite y colocaremos -->

<!-- *import { defineConfig } from "vite";
*import react from "@vitejs/plugin-react";
*export default defineConfig({
*plugins: [react()],
*}); -->

una vez inicializamos el proyecto debemos en lo posible instalar un linkter
 <!-- ? -->>> npm install standar --global  -->
 <!-- ! configuramos en el archivo package.json -->
   "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }

<!-- Endponit para usar:  -->

`https://cataas.com/cat/says/${fitsWord}?size=:size&color=:color&json=true`