import { Allroutes } from "./Routes/Allroutes";
import { Navbar } from "./Components/Navbar/navbar";
import { CardS } from "./Components/card/card";
import { Copyright } from "./Components/copyright/copyright";
import "./App.css"

function App() {
  return (
    <div className="Appmain">
      
      <div className="appnavbar">
      <Navbar></Navbar>
      </div>
      <Allroutes></Allroutes>
      <div className="Appcopy">
        <Copyright></Copyright>
      </div>
    </div>
  );
}

export default App;
