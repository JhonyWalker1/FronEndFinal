import React from "react";
import "./index.css";
import ct from "../../assets/Image/ct.png";
import { ButtonGroup, Button,Grid, TextField, Container,Badge  } from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";
import ft from "../../assets/Image/fate.png";
import ip from "../../assets/Image/insta_pro.png";
import yt from "../../assets/Image/youtube.png";




const Main = () => {

  const { user,basket } = useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    /* window.location.reload(); */
  }
  const renderButtonisLogged = () => (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button component={Link} to="/profile">Mi cuenta</Button>
            <Button component={Link} to="/login" onClick={logout}>Cerrar Sesión</Button>
    </ButtonGroup>
  )
  const renderButtonisNotLogged = () => (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button component={Link} to="/login">Iniciar Sesión</Button>
            <Button component={Link} to="/signup">Registrarse</Button>
    </ButtonGroup>
  )

  return (
    <div>
    <Container sm>
        <Grid container alignItems="center" ml={5} mr={5}> 
          <Grid item md={1}>
            <Link to="/">
             <img className="img-logo" id={1} src={ct} />
             </Link>
          </Grid>
          <Grid item md={3} className="txt-field">
          <TextField
              
              variant="standard"
              sx={{
                width: 150,
                marginBottom: "25px",
              }}
              label="Buscar un tour"
            />   
            
          </Grid>
          <Grid item md={5}>
          <ul className="ul-ecommerce">
            <li>
              <a href="#"> Inicio</a>
            </li>
            <li>
              <a href="#"> Nosotros</a>
            </li>
            <li>
              <a href="#"> Acerca de Nosotros</a>
            </li>
            <li className="li-basket">
            <Link to="/carview">Basket 
            <Badge 
            badgeContent={basket ? basket.length : 0} color="primary">
             <ShoppingCartRoundedIcon/> 
            </Badge>
            </Link>
            </li> 
            </ul>  
          </Grid>
          
          <Grid item md={3} sx={{textAlign:"center"}}>
         
          {user === null ? renderButtonisNotLogged() : renderButtonisLogged()}
          
        
         </Grid>
        </Grid>
      
      <Outlet />
      </Container>

{/*Inicio de Footer*/}

<div className="foot_princ">
<div className="main-footer">
<div className="container">
<div className="row">
{/*Column 1 */}

<div className="col-md-3 col-sm-6">
<div class="title-foot"> 
<img className="img-logo" src={ct} alt="" />
</div>
<div className="card-foot">
<ul className="list-unstyled"> 
    <strong><li>Siguenos:</li></strong>
    <img className="img-red" src={ft} alt="" />&nbsp;&nbsp;
    <img className="img-red" src={ip} alt="" />&nbsp;&nbsp;   
    <img className="img-red" src={yt} alt="" />            
</ul>
</div>
</div>
{/*Column 2 */}
<div className="col-md-3 col-sm-6">
<div class="title-foot"> 
<h4>DONDE IR</h4>
</div>
<div className="card-foot">
<ul className="list-unstyled"> 
    <li>Costa Peruana</li>
    <li>Andes Peruanos</li>
    <li>Amazonia Peruana</li>
    <li>Turismo Extremo</li>
</ul> 
 </div>      
</div>
{/*Column 3 */}
<div className="col-md-3 col-sm-6">
<div class="title-foot"> 
<h4>QUÉ HACER</h4>
</div>
<div className="card-foot">
<ul className="list-unstyled"> 
    <li>Naturaleza y Aventura</li>
    <li>Sol y Playa</li>
    <li>Cultura</li>    
    <li>Comunitario</li>            
</ul>   
</div>     
</div>
{/*Column 4 */}
<div className="col-md-3 col-sm-6">
<div class="title-foot"> 
<h4>TIPS DE VIAJE</h4>
</div>
<div className="card-foot">
<ul className="list-unstyled"> 
    <li>Acerca de Perú</li>
    <li>Clima</li>
    <li>Convertidor de Moneda</li>
    <li>Visa y Embajadas</li>
</ul>  
</div>      
</div>
</div>

{/* Footer Bootom */}
<div className="foot-copy">
<div className="footer-bottom">
    <p className="text-xs-center">
    &copy;{new Date().getFullYear()} CodiGO-13 - All Rights Reserved
    </p>
</div>
</div>
</div>
</div> 
</div>
</div>
  );
};

export default Main;
