import './App.css';
import Stepper from "./components/Stepper";
import {useSelector} from "react-redux";
import LoginPage from "./components/LoginPage";

function App() {
    const userId = useSelector(s => s.userId.data);
  return (
    <div className="App">
        {userId ? <Stepper /> : <LoginPage/>}
    </div>
  );
}

export default App;
