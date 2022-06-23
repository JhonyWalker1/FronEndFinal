import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate, Outlet, Link } from "react-router-dom";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import codigoLogo from "../../assets/codigo-logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutIcon from '@mui/icons-material/Logout';

import "./index.css";

const Private = () => {
  const { user } = useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    /* window.location.reload(); */
  }

  // Estamos validando si el usuario no existe entonces hacemos
  // que auotmaticamente la pagina lo redirija al login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Box m={2}>
      <Grid container>
        <Grid item md={2} xs={12} className="border-right">
          <div className="m-3">
            <div className="container-admin-logo">
              <div>
                <a  href="/">
                <img src={codigoLogo} width={50} alt="logo"/>
                </a>
              </div>
              &nbsp;
              <div>
                <h4>Mi Perfil</h4>
                
              </div>
            </div>
            <div className="mt-4">
              <List>
                <ListItem button component={Link} to="/profile">
                  <ListItemIcon>
                    <AccountCircleRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mi Perfil" />
                </ListItem>
                <ListItem button component={Link} to="/order">
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mis Compras" />
                </ListItem>
                <ListItem button component={Link} to="/login" onClick={logout}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cerrar Sesión" />
                </ListItem>
              </List>
              <Box m={1}>
                <Divider />
              </Box>
            </div>
          </div>
        </Grid>
        <Grid item md={10} xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Private;
