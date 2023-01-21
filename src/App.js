import "bootstrap/dist/css/bootstrap.min.css";
import minhaImagem from "./assets/t.jpg";
import music from "./assets/calm.mp3";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const getPositionRandom = () => {
    return Math.round(Math.random() * 800) + "px";
  };

  const handleMouseHouver = () => {
    let btnNao = document.getElementById("nao");

    btnNao.style.left = getPositionRandom();
    btnNao.style.bottom = getPositionRandom();
    btnNao.style.position = "absolute";
  };

  return (
    <div id="container">
      <h1>Quer casar comigo amor?</h1>
      <div className="btn_group">
      
        <button id="sim"><Link to="/fotos/" className="btn">Sim</Link></button>
        <button id="nao" onMouseMove={handleMouseHouver}>
          Não
        </button>
      </div>
      <img src={minhaImagem} alt="we" className="imgBackGround"></img>
      <audio autoPlay loop controls id="audio">
        <source src={music} />
      </audio>
    </div>
  );
}

export { App };
