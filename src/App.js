import NavBar from './components/Navbar/NavBar'
import './components/Navbar/Navbar.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/'} exact element={<ItemListContainer />}/>
        <Route path={"/category/:id"} exact element={<ItemListContainer />}/>
        <Route path={"/item/:id"} exact element={<ItemDetailContainer />}/>
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
