import logo from './logo.svg';
import './App.css';
import Saludar  from "./components/Saludar";


export default function App() {
  const user={
    nombre:"José Luis",
    apellido:"Hernández de la C.",
    edad:26,
    color: "azul"
  };
      const saludarFn = () => {
        console.log("Hola JL")
      }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar  userInfo={user} saludarFn={saludarFn}/>
        
      </header>
    </div>
  );
}


