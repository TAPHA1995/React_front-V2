import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Nav,NavDropdown} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = new useNavigate();
  const handleClearLocalStorage = () => {
    // localStorage.clear();
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    navigate("/Login");
   
  };

  const userName = localStorage.getItem("username");
  const [DisplayUserName, setDisplayUserName] = useState("");
  useEffect(() => {
    if (userName) {
      setDisplayUserName(` ${userName}  `);
    }
  }, []);
  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-2 px-2  md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
        <div className="texte">
          <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer text-decoration-none">
            RxDForm
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-3 ">
          <Link
            to="/"
            className="hover:text-[#539165] transition-all cursor-pointer text-decoration-none "
          >
            Accueil
          </Link>

              {
                localStorage.getItem('username') ?
                <>
                 <Link
                    to="/sondages"
                    className="hover:text-[#539165] transition-all cursor-pointer text-decoration-none"
                  >
                    Créer un sondage
                  </Link>
                  <Link to="/ListeSondage" className="hover:text-[#539165] transition-all cursor-pointer text-decoration-none">
                    Mes sondages
                  </Link>|
                  <div>{DisplayUserName}</div>
                  <Link to="/Login" className="hover:text-[#539165] transition-all cursor-pointer text-decoration-none" onClick={handleClearLocalStorage}>
                    
                    Log out
                  </Link>
                  </>
                :
                <>
                <Link to="/Login" className="hover:text-[#539165] transition-all cursor-pointer text-decoration-none">
                    Log In
                  </Link>
                </>
              }
        </nav>
        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="/"
          className="hover:text-[#539165] transition-all cursor-pointer text-decoration-none"
        >
          Accueil
        </Link>
        <Link
          to="/sondages"
          className="hover:text-[#539165] transition-all cursor-pointer text-decoration-none"
        >
          Créer un sondage
        </Link>
        <Link
          to="/ListeSondage"
          className="hover:text-[#539165] transition-all cursor-pointer text-decoration-none"
        >
          Mes sondages
        </Link>
        <Link
          to="Login"
          className="hover:text-[#539165] transition-all cursor-pointer text-decoration-none"
        >
          Créer un compte
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
