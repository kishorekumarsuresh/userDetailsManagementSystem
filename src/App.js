import React from "react";
import "./App.css";
import Home from "./components/Home";
import Display from "./components/Display";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Navig from "./components/Navig";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import NewHome from "./components/NewHome";
import UserDetails from "./components/UserDetails";
import EditDetails from "./components/EditDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navig />
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/userdetails/:id" element={<UserDetails />} />
          <Route path="/create" element={<Create />} />
          <Route path="/editdetails/:id" element={<EditDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
