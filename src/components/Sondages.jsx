import React, { useState, useEffect, } from "react";
import Heading from "../layout/Heading";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import img from "../assets/MODEL_SONDAGE.PNG";
import Model_un from "./model/Model_un";
import axios from "axios";
import { Link } from "react-router-dom";
import username from "react"
// import userInfo from "react"
const Courses = () => {
  const userName = localStorage.getItem("username");
  const [DisplayUserName, setDisplayUserName] = useState("");

  useEffect(() => {
    if (userName) {
      setDisplayUserName(`, ${userName} ! `);
    }
  }, []);



 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8000/api/sondages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(surveyData),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données", error);
    }
  };


  
  // const userName = localStorage.getItem("username");
  // const [DisplayUserName, setDisplayUserName] = useState("");
 

  // const navigate = new useNavigate();
  // useEffect(()=>{
    
  //   if (localStorage.getItem('username'))
  //    {
  //     // navigate("/")
  //   }
  // })

  // // useEffect(() => {
  // //   if (userName) {
  // //     // Mettez à jour la variable d'état avec le message de bienvenue
  // //     <Heading title1="Créer" title2="un sondage" />;
  // //     setDisplayUserName(`${userName} ! `);
  // //   }
  // // }, []);
  // const [username, setUsername] = useState('');
  // const [user, setUser]=useState('')
  // // useEffect(()=>{
  // //   userInfo()
  // // },[]);
  // useEffect(() => {
  //   // Fonction pour récupérer les données de l'utilisateur depuis l'API
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/api/user')
      
  //       if (localStorage.getItem('user_token'))
  //       {
      
  //       }
      
  //       // Assurez-vous que votre API renvoie le nom d'utilisateur
  //       setUsername(response.data);
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des données utilisateur:', error);
  //     }
  //   };

  //   fetchUserData(); // Appel de la fonction pour récupérer les données utilisateur lors du montage du composant
  // }, []);
  return (
    <div>   
    {
        localStorage.getItem('username') ?
        <>
        <Navbar/>
        <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">

      <h2>
        Bienvenue
        <span className="font-semibold text-lg mb-4"> {DisplayUserName}</span>
      </h2>

      <div className="my-4 text-center">
        <p className="text-gray-700 leading-relaxed">
        Choisissez un models de formulaire de sondage
        </p><br />
        <div className="container_model">
          <div className="container_img">
            <Link to="/Model_un">
              <img src={img} alt="" />
             </Link>
          </div>
          <div className="container_img">
             <img src={img} alt="" />
          </div>
          <div className="container_img">
             <img src={img} alt="" />
          </div>
          <div className="container_img">
             <img src={img} alt="" />
          </div>
          <div className="container_img">
             <img src={img} alt="" />
          </div>
        </div>
      </div>
      </div>
          </>
        :
        <>
         <Login/>
        </>
      }

    </div>
  );
};

export default Courses;
