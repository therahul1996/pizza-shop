import "./App.css";
import UserSide from "./pages/UserSide";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserSide />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
