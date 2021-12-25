import './style/App.css';
import Game from "./component/Game";

function App() {
  // Сделать компонент "Крестики-Нолики" оазмер поля принимя как атрибут

  return (
    <Game length={3}/>
  );
}

export default App;
