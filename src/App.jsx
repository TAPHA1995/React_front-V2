import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Sondages from "./components/Sondages";
import ListeSondage from "./components/ListeSondage";
import LogoutUSER from "./components/LogoutUSER";
import Model_un from "./components/model/Model_un";
import "./App.css"
import Reponse_model_un from "./components/model/Reponse_model_un";
import Quuestion_modul_un from "./components/model/Quuestion_modul_un";
import Lien_model1 from "./components/model/lien_model_un/Lien_model1";
import  Question1 from "./components/model/Question_model_un/Question1"
import Titre_model_un from "./components/model/Question_model_un/Titre_model_un"
import  Question2 from "./components/model/Question_model_un/Question2"
import  Question3 from "./components/model/Question_model_un/Question3"
import  Question4 from "./components/model/Question_model_un/Question4"
import  Question5 from "./components/model/Question_model_un/Question5"



// import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <Router>
      <div>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LogoutUSER" element={<LogoutUSER />} />
          <Route path="/sondages" element={<Sondages />} />
          <Route path="/ListeSondage" element={<ListeSondage />} />
          <Route path="/Model_un" element={<Model_un />} />
          <Route path="/Reponse_model_un" element={<Reponse_model_un />} />
          <Route path="/Quuestion_modul_un" element={<Quuestion_modul_un />} />
          <Route path="/Lien_model1" element={<Lien_model1 />} />
          <Route path="/Titre_model_un" element={<Titre_model_un />} />
          <Route path="/Question1" element={<Question1 />} />
          <Route path="/Question2" element={<Question2 />} />
          <Route path="/Question3" element={<Question3 />} />
          <Route path="/Question4" element={<Question4 />} />
          <Route path="/Question5" element={<Question5 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
