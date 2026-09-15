import Header from "./Header";
import Main from "./Main";
import Animal from "./Animal";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Animal selectedAnimal="cato" />
    </div>
  );
}

export default App;
