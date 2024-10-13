import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Route>
    </Routes>
  );
}

export default App;
