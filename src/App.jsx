import "../src/styles/header.scss";
import "../src/styles/banner.scss";
import "../src/styles/category.scss";
import "./styles/App.scss";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
