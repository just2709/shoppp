import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductFeature from "./features/Product";
import ListPage from "./features/Product/pages/ListPage";
import CartFeature from "./features/Cart";
import Header from "./components/Header";
import Notfound from "./components/Notfound/index";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/*' element={<ProductFeature />}></Route>
          <Route path='/cart' element={<CartFeature />}></Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
