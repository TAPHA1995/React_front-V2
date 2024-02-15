import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Quuestion_modul_un = () => {

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
    const rowCount = data.length;

  return (
    <div>
        <Link to="/Reponse_model_un">
            <svg viewBox="0 0 36 36" class="circle-svg">

            <path class="around" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>

            <path class="percent" stroke-dasharray="35, 0" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>

            <text x="18" y="14" text-anchor="middle" dy="7" font-size="20">{rowCount}</text>
            </svg>
        </Link>
       
    </div>
  )
}

export default Quuestion_modul_un
