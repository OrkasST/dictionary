import { Route, Routes } from "react-router-dom";
import AppWrapper from "./App-style";
import AllWords from "./components/Pages/AllWords/AllWords";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-words" element={<AllWords />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
