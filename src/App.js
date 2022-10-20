import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./components/Error";
import UserChoice from "./pages/UserChoice";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserChoice />} />
        <Route path="/user/:id" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
