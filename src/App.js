import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./React-demo/Login";
import { Dashboard } from "./React-demo/Dashboard";
import MainNavbar from "./React-demo/MainNavbar";
import { News } from "./React-demo/News";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/mainnavbar' element={<MainNavbar />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
