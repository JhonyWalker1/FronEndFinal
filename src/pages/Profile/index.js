import { useState, useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import "./index.css";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { getUserDetail } from "../../service/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouseUser,faPhone,faInbox,faEarthAmericas,faCity,faCakeCandles,faImages} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {

    const { user } = useContext(UserContext);
    const [userDetail, setUserDetail] = useState([]);


    const token = localStorage.getItem("token");
    const decodetoken = JSON.parse(token)
    sessionStorage.getItem("token");
    sessionStorage.getItem("user");

    const idProfile = decodetoken.user_id;

    const fetchUserDetail = async () => {
      const response = await getUserDetail(idProfile);
      setUserDetail(response.content)
    }

  // esta funcion sera activada por el click del usuario
  useEffect(() => {
    fetchUserDetail();
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
    {/*  <Container>
    <Grid container spacing={3}> */}
        <section class="seccion-perfil-usuario">
        <div class="perfil-usuario-header">
            <div class="perfil-usuario-portada">
                <div class="perfil-usuario-avatar">
                    <img src={userDetail.cliente_foto} alt="img-avatar" />
                    <button type="button" class="boton-avatar">
                    <FontAwesomeIcon icon={faImages} />
                    </button>
                </div>
                <button type="button" class="boton-portada">
                    <i class="far fa-image"></i> Cambiar fondo
                </button>
            </div>
        </div>
        <div class="perfil-usuario-body">
            <div class="perfil-usuario-bio">
                <h3 class="titulo">`{userDetail.cliente_nombre} {userDetail.cliente_apellido}`</h3>
                <p class="titulo">Bienvenido a tu mejor experiencia por vivir</p>
            </div>
            <div class="perfil-usuario-footer">
                <ul class="lista-datos">
                    <li><FontAwesomeIcon icon={faHouseUser}/><b> Direccion de usuario: </b></li>
                    <li><FontAwesomeIcon icon={faPhone} /><b> Telefono: </b></li>
                    <li><FontAwesomeIcon icon={faInbox} /><b> Email: </b></li>
                    <li><FontAwesomeIcon icon={faEarthAmericas} /><b> País: </b></li>
                    <li><FontAwesomeIcon icon={faCity} /><b>  Ciudad: </b></li>
                    <li><FontAwesomeIcon icon={faCakeCandles} /><b>  Fecha de nacimiento: </b></li>
                </ul>
                <ul class="lista-datos">
                  <li>{userDetail.cliente_direccion}</li>
                  <li>{userDetail.cliente_telefono}</li>
                  <li>{userDetail.email}</li>
                  <li>{userDetail.cliente_pais}</li>
                  <li>{userDetail.cliente_ciudad}</li>
                  <li>{userDetail.cliente_fecha_nacimiento}</li>  
                </ul>
            </div>
            <div class="redes-sociales">
                <a href="" class="boton-redes facebook fab fa-facebook-f"><i class="icon-facebook"></i></a>
                <a href="" class="boton-redes twitter fab fa-twitter"><i class="icon-twitter"></i></a>
                <a href="" class="boton-redes instagram fab fa-instagram"><i class="icon-instagram"></i></a>
            </div>
        </div>
    </section>
    </div>
    
)
};

export default Profile;
