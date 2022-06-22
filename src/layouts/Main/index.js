import React from "react";
import "./index.css";
import ct from "../../assets/Image/ct.png";
import { ButtonGroup, Button,Grid, TextField, Container,Badge  } from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";



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
    <Container sm>
        <Grid container alignItems="center" ml={5} mr={5}> 
          <Grid item md={1}>
             <img className="img-logo" id={1} src={ct} />
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
            <Badge badgeContent={basket ? basket.length : 0} color="primary">
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

  );
};

export default Main;
