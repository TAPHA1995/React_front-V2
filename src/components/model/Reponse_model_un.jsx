import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Titre_model_un  from "../model/Question_model_un/Titre_model_un";
import Question1  from "../model/Question_model_un/Question1";
import Question2  from "../model/Question_model_un/Question2";
import Question3  from "../model/Question_model_un/Question3";
import Question4  from "../model/Question_model_un/Question4";
import Question5  from "../model/Question_model_un/Question5";


const Reponse_model_un = () => {


    // Affiche des reponse
    const [data,setData]=useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/affiche_reponse_modul')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Erreur de récupération des données:', error);
        });
    }, []);
     console.warn("result",data);
    //  const numberOfRows = reponse_modul_un.length;

   
  return (
    <div>
      <Navbar/>
      <br/>
      <p className="resultat">Résultat sondage:<titre_sondage/></p>
      <div className="maincontainer">
       {data.map((row) => (
            <div class="inner">
              <span class="pricing">
                ID :
                <span>
                {row.id}
                </span>
              </span>
              <h2 class="title"><Question1/>: {row.etezvousdeveloppeur}</h2>
              <h2 class="title"><Question2/>: {row.duree}</h2>
              <h2 class="title"><Question3/>: {row.moyen}</h2>
              <h2 class="title"><Question4/>: {row.langages}</h2>
              <h2 class="title"><Question5/>: {row.frameworks}</h2>
            </div>
      ))}
      </div>
    </div>
  )
}

export default Reponse_model_un
