// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../Navbar";

// const Reponse_model_un = () => {


//     // Affiche des reponse
//     const [data,setData]=useState([]);
//     useEffect(() => {
//       axios.get('http://127.0.0.1:8000/api/affiche_reponse_modul')
//         .then(response => {
//           setData(response.data);
//         })
//         .catch(error => {
//           console.error('Erreur de récupération des données:', error);
//         });
//     }, []);
//      console.warn("result",data);
//     //  const numberOfRows = reponse_modul_un.length;

   
//   return (
//     <div>
//       <Navbar/>
//        {data.map((row) => (
//         <div className="maincontainer">
//         <div class="cards">
//           <article class="plan [ card ]">
//             <div class="inner">
//               <span class="pricing">
//                 <span>
//                 {row.id}
//                 </span>
//               </span>
//               <h2 class="title">Question1:{row.etezvousdeveloppeur}</h2>
//               <h2 class="title">Question2:{row.duree}</h2>
//               <h2 class="title">Question3:{row.moyen}</h2>
//               <h2 class="title">Question4:{row.langages}</h2>
//               <h2 class="title">Question5:{row.frameworks}</h2>
//               <button class="button">
//                 ACTION
//               </button>
//             </div>
//           </article>
//         </div>
//       </div>
//       ))}
//     </div>
//   )
// }

// export default Reponse_model_un



// Sondage pour savor le nombre d'emplyé chez GPR gro...

// Etes-vous emplyé chez GPR groupe ?

// oui
// non

// Vous êtes employé d'ici depuis combien de temps ?

// Quel type de contrat avez-obtenu ?

// CDI


// CDD

// STAGIAIRE

// Quels sont les avantages chez GPR groupe ?

// Quels sont les inconvénients chez GPR ?



// "titre_sondage": "Add your name in the body",
//     "question1": "Add your name in the body",
//     "reponse_opt_1": "Add your name in the body",
//     "reponse_opt_2": "Add your name in the body",
//     "question2": "Add your name in the body",
//     "question3": "Add your name in the body",
//     "reponse_opt_3": "Add your name in the body",
//     "reponse_opt_4": "Add your name in the body",
//     "reponse_opt_5": "Add your name in the body",
//     "question4": "Add your name in the body",
//     "question5": "Add your name in the body"