import React, { useState, useEffect } from "react";
import useNavigate from "react"
import axios from "axios"
import Button from "../../../layout/Button";
import { FaShare } from 'react-icons/fa';


const Lien_model1 = (props) => {
  // const navigate = new useNavigate();
      const [formData, setFormData] = useState({
        etezvousdeveloppeur: "",
        duree: "",
        moyen: "",
        langages: "",
        frameworks: "",
      });
      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const [successMessage, setSuccessMessage] = useState("");
      const [errorMessage, setErrorMessage] = useState("");
      const envoy = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/soumettreSondage",
        formData
      );
      setSuccessMessage("Vos réponses envoyées avec succès, merçi !");
      // Réinitialisez le formulaire après une inscription réussie
      setFormData({
        etezvousdeveloppeur: "",
        duree: "",
        moyen: "",
        langages: "",
        frameworks: "",
      });
    } catch (error) {
      setErrorMessage("The email has already been taken.");
      console.error("Erreur lors de l'inscription : ", error.response.data);
    }
  };
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
    <div className="sondage_model_un">
    {data.map((row) => (
    <div class="testbox_listeSondage">
     <div className="contaier_form">
      <p class="ennocee"> {row.titre_sondage}</p>
      <br />
      <form
        className="w-full md:w-2/5 form_liste_sondage space-y-5 pt-20"
        onSubmit={envoy}
        >
         <div class="question"> 
              <label>{row.question1}</label>
              <div class="question-answer">
                <div>
                  <input type="radio" value={row.reponse_opt_1} id="radio_21" name="etezvousdeveloppeur"
                  onChange={handleInputChange}/>
                  <label for="radio_21" class="radio"><span>{row.reponse_opt_1}</span><div class="round_lien"></div></label>
                </div>
                <div>
                  <input type="radio" value={row.reponse_opt_2} id="22" name="etezvousdeveloppeur"
                  onChange={handleInputChange}/>
                  <label for="22" class="radio"><span>{row.reponse_opt_2}</span><div class="round_lien"></div></label>
                </div>
              </div>
            </div>
            <div class="question">
              <label>{row.question2}</label>
              <div class="question-answer">
                <div>
                <input type="text" name="duree"  onChange={handleInputChange}/>
                </div>
              </div>
            </div>
            <div class="question">
              <label>{row.question3}</label>
              <div class="question-answer">
                <div>
                  <input type="radio" value={row.reponse_opt_3} id="radio_25" name="moyen" onChange={handleInputChange}/>
                  <label for="radio_25" class="radio"><span>{row.reponse_opt_3}</span><div class="round_lien"></div></label>
                </div>
                <div>
                    <input type="radio" value={row. reponse_opt_4} id="radio_26" name="moyen" onChange={handleInputChange}/>
                    <label for="radio_26" class="radio"><span>{row. reponse_opt_4}</span><div class="round_lien"></div></label>
                  </div>
                <div>
                  <input type="radio" value={row.reponse_opt_5} id="radio_27" name="moyen" onChange={handleInputChange}/>
                  <label for="radio_27" class="radio"><span>{row.reponse_opt_5}</span><div class="round_lien"></div></label>
                </div>
              </div>
            </div>
            <div class="question">
              <label>{row.question4}</label>
              <div class="question-answer">
                <div>
                  <textarea name="langages"  id="radio_28"   cols="30" rows="10" onChange={handleInputChange}></textarea>
                </div>
              </div>
            </div>
            <div class="question">
              <p>{row.question5}</p>
              <div class="question-answer">
                <div>
                    <textarea name="frameworks"  id="radio_30"   cols="30" rows="10" onChange={handleInputChange}></textarea>
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
            <Button type="submit" title="Log In" />
            </div>
          </form>
          </div> 
          </div>
      ))}
      </div>
    </div>
  )
}

export default Lien_model1
