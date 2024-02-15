import React, { useState, useEffect } from "react";
import axios from "axios";

const Titre_model_un = () => {

    const [data,setData]=useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/affiche_modul')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Erreur de récupération des données:', error);
        });
    }, []);


    
  return (
    <div>
        {data.map((row) => (
            <div>
              {row.titre_sondage}
            </div>
        
        ))}
    </div>
  )
}

export default Titre_model_un
