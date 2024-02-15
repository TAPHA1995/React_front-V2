import React, { useState, useEffect } from "react";
import axios from "axios";
const Question5 = () => {
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
              {row.question5}
            </div>
        
        ))}
    </div>
  )
}

export default Question5
