import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>¡Dude, hola mundo en React!</h1>
      <p>
        Amigo, gracias por presionarme, yo sé que me demoré un poco pero es que estoy muy oxidado, pero sigue presionándome amigo trátame como tu perr@ xD y eso me ayudará mucho.
      </p>
      <p>
        Como le diría Musk a Trump: "Te amo amigo tanto como un hombre heterosexual puede amar a otro hombre" xD
      </p>
      <p>
        En este micro-proyecto por ahora voy aprendiendo entre otras muchas cosas conceptos como:
      </p>
      <ul>
        <li>React no es un framework, es más una librería de JavaScript, aunque su complejidad ha crecido al punto que algunas personas le llaman framework</li>
        <li>Para entender React y manejarme bien en él, es recomendable que domine algo de JavaScript (digamos) clásico, que es algo que estudiaré</li>
        <li>React funciona en el lado del cliente, no del servidor, pero para poder mostrar esta pagina (estática por ahora) se necesitó siempre de un servidor que corre en XXX</li>
        <li>Para la construcción de este micro-proyecto en React he usado Vite, antes se usaba CRA pero dicen que era algo problemático</li>
        <li>Mi editor fue VS Code, luego de probado localmente lo subí a GitHub, y con su herramienta GitHub Pages YYYY</li>
      </ul>
      <h2>Vite + React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}


export default App;