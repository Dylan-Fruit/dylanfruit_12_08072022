import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { DataProvider } from "./DataContext";
import UserChoice from "./pages/UserChoice";

const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<UserChoice />} />
          <Route path="/user/:id" element={<Home />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
