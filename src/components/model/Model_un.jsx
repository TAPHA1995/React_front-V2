import React, { useState, useEffect } from "react";
import Heading from "../../layout/Heading";
import { useNavigate } from "react-router-dom";
import Button from "../../layout/Button";
import axios from "axios";
import Navbar from "../Navbar";
import Login from "../Login";
import img from "../../assets/MODEL_SONDAGE_CREER_UN.png";
import { Link } from "react-router-dom";




const Model_un = (props) => {

  // const navigate = new useNavigate();
  useEffect(()=>{
    
    if (localStorage.getItem('username'))
     {
      navigate("/Model_un")
    }
  })
  const navigate = new useNavigate();
      const [formData, setFormData] = useState({
        titre_sondage: "",
        question1: "",
        reponse_opt_1: "",
        reponse_opt_2: "",
        question2: "",
        question3: "",
        reponse_opt_3: "",
        reponse_opt_4: "",
        reponse_opt_5: "",
        question4: "",
        question5: "",

      });

      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const [successMessage, setSuccessMessage] = useState("");
      const [errorMessage, setErrorMessage] = useState("");

     const creer = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/creer_form_sondage",
        formData
      );
      setSuccessMessage("Sondage crée avec succès");
      // Réinitialisez le formulaire après une inscription réussie
      setFormData({
        titre_sondage: "",
        question1: "",
        reponse_opt_1: "",
        reponse_opt_2: "",
        question2: "",
        question3: "",
        reponse_opt_3: "",
        reponse_opt_4: "",
        reponse_opt_5: "",
        question4: "",
        question5: "",
      });
      navigate("/ListeSondage");
    } catch (error) {
      setErrorMessage("Echec.");
      console.error("Erreur lors de l'inscription : ", error.response.data);
    }
  };
  return (
    <div>
     {
        localStorage.getItem('username') ?
        <>
        <Navbar/>
        <div class="testbox">
          <div>
            <img src={img} alt="img" className="image_model_un" />
          </div>
        <form className="w-full md:w-2/5 space-y-5 pt-20 form_model1" onSubmit={creer}>
        {/* Sondage pour savoir le nombre  de développeur(se) au Sénégal 2024 */}
        <span className="lable1">
        <label htmlFor=""><span className="numero_question"><strong>1</strong></span></label>
          <p class="ennocee"><input type="text" placeholder="titre du sondage" name="titre_sondage"  onChange={handleInputChange} required/></p></span>
          <br />
           <div class="question">
              <span className="lable1">
                <label htmlFor=""><span className="numero_question"><strong>2</strong></span></label> 
                <input type="text" name="question1" onChange={handleInputChange}  required />
              </span>
              <div class="question-answer">
                <div>        
                  <input type="radio" value="oui" id="radio_21" name="etezvousdeveloppeur"
                 disabled/>
                  <span className="lable1">
                   <label htmlFor=""><span className="numero_question"><strong>3</strong></span></label>
                  <label for="radio_21" class="radio"><span><input type="text" name="reponse_opt_1" onChange={handleInputChange} required /></span></label>
                  </span>
                </div>
                <div>
                  <input type="radio" value="non" id="22" name="etezvousdeveloppeur" disabled/>
                  <span className="lable1">
                   <label htmlFor=""><span className="numero_question"><strong>4</strong></span></label>
                  <label for="22" class="radio"><span><input type="text" name="reponse_opt_2" onChange={handleInputChange}  required/></span></label></span>
                </div>
              </div>
            </div> 
            <div class="question">
              <label>
              <span className="lable1">
                <label htmlFor=""><span className="numero_question"><strong>5</strong></span></label>
                <input type="text" name="question2" onChange={handleInputChange} required/>
              </span>
              </label>
              <div class="question-answer">
                <div>
                  <input type="text" name="duree"   disabled/>
                </div>
              </div>
            </div>
            <div class="question">
            <span className="lable1">
                  <label htmlFor=""><span className="numero_question"><strong>6</strong></span></label>
                  <label><input type="text" name="question3" onChange={handleInputChange} required/></label>
             </span>
              <div class="question-answer">
                <div>
                  <input type="radio" value="Grace-à-une-formation-gratuite" id="radio_25" name="moyen"  disabled/>
                  <span className="lable1">
                   <label htmlFor=""><span className="numero_question"><strong></strong></span></label>
                  <label for="radio_25" class="radio"><span><input type="text" name="reponse_opt_3"  onChange={handleInputChange} required  /></span></label></span>
                </div>
                <div>
                    <input type="radio" value="Grace-à-une-formation-payante" id="radio_26" name="moyen" disabled/>
                    <span className="lable1">
                   <label htmlFor=""><span className="numero_question"><strong>8</strong></span></label>
                    <label for="radio_26" class="radio" disabled><span><input type="text" name="reponse_opt_4" onChange={handleInputChange} required/></span></label></span>
                </div>
                <div>
                  <input type="radio" value="En-autodidacte" id="radio_27" name="moyen" />
                  <span className="lable1">
                   <label htmlFor=""><span className="numero_question"><strong>9</strong></span></label>
                  <label for="radio_27" class="radio" disabled><span><input type="text" name="reponse_opt_5" onChange={handleInputChange}/></span></label></span>
                </div>
              </div>
            </div>
            <div class="question">
            <span className="lable1">
                   <label htmlFor=""><span className="numero_question"><strong>10</strong></span></label>
              <label><input type="text" name="question4" onChange={handleInputChange} required/></label></span>
              <div class="question-answer">
                <div>
                  <textarea name="langages"   id="radio_28"   cols="30" rows="10" disabled></textarea>
                </div>
              </div>
            </div>
            <div class="question">
            <span className="lable1">
                   <label htmlFor=""><span className="numero_question"><strong>11</strong></span></label>
                  <p><input type="text" name="question5"  onChange={handleInputChange} required/></p>
              </span>
              <div class="question-answer">
                <div>
                    <textarea name="frameworks"  id="radio_30"   cols="30" rows="10" disabled ></textarea>
                </div>
              </div>
            </div> 
            {(errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3">
              {errorMessage}
            </div>
          )) ||
            (successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-3">
                {successMessage}
              </div>
            ))}
            <div class="btn-block">
               <Button type="submit" title="Créer" />
            </div>
          </form>
        </div>
          </>
          :
          <>
         <Login/>
        </>
      }
    </div>
  )
}
export default Model_un