import "./App.css";
import { InputComponent } from "./components/input/Input.tsx";
import { SubmitButton } from "./components/button/button.tsx";

function App() {
  return (
    <div className="App">
      <InputComponent />
      <SubmitButton />
    </div>
  );
}

export default App;
