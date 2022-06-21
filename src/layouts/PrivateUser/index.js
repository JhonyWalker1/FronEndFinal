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
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./index.css";

const Private = () => {
  const { user } = useContext(UserContext);

  // Estamos validando si el usuario no existe entonces hacemos
  // que auotmaticamente la pagina lo redirija al login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item md={1.7} className="border-right">
          <div className="m-5">
            <div className="container-admin-logo">
              <div>
                <a  href="/">
                <img src={codigoLogo} width={50} alt="logo"/>
                </a>
              </div>
              &nbsp;&nbsp;
              <div>
                <h4>Mi Perfil</h4>
                
              </div>
            </div>
            <div className="mt-5">
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
              </List>
              <Box m={3}>
                <Divider />
              </Box>
            </div>
          </div>
        </Grid>
        <Grid item md={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Private;
