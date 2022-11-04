import './App.css';
import Stepper from "./components/Stepper";
import {useSelector} from "react-redux";
import LoginPage from "./components/LoginPage";
import AssentLoginPageOld from "./components/AssentLoginPage";
import Announcer from "./components/Announcer";

function App() {
    const userId = useSelector(s => s.userId.data);
  return (
    <div className="App">
        {userId ? <Announcer /> : <AssentLoginPageOld/>}
    </div>
  );
}

export default App;
