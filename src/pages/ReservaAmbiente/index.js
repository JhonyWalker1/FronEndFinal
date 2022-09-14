import React from "react";
import "./index.css";
import log_c from "../../assets/Image/log_c.png";
import { ButtonGroup, Button, Grid, TextField, Container, Badge, Typography,Box   } from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";
import ft from "../../assets/Image/fate.png";
import ip from "../../assets/Image/insta_pro.png";
import yt from "../../assets/Image/youtube.png";
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Reserva = () => {

    const { user, basket } = useContext(UserContext);

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const [value2, setValue2] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
      };
    const handleChange2 = (newValue) => {
        setValue2(newValue);
      };

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

    return(
        <>
         <Container fixed>
        <Grid container alignItems="center" className="nav">
          <Grid item md={1} xs={6} sx={{display:"flex",justifyContent:"center"}}>
            <Link to="/">
              <img className="img-logo" src={log_c} />
            </Link>
          </Grid>
         {/*  <Grid item md={3} xs={6} className="txt-field">
            <TextField

              variant="standard"
              sx={{
                width: 150,
                marginBottom: "25px",
              }}
              label="Buscar un tour"
            />

          </Grid> */}
          <Grid item md={2}>

          </Grid>
          <Grid item md={3} xs={12}>
            <ul className="ul-ecommerce">
              <li>
                <a href="#"> Reserva de ambientes</a>
              </li>
              <li>
                <a href="#"> Nosotros</a>
              </li>
              <li className="li-basket">
              </li>
            </ul>
          </Grid>
          <Grid item md={3}>

          </Grid>
          <Grid item md={3} sx={{ textAlign: "center"}} xs={12}>
            {user === null ? renderButtonisNotLogged() : renderButtonisLogged()}
          </Grid>
        </Grid>
      </Container>

      <Container>
      <Grid container alignItems="center" className="nav">
      <Grid item md={3} xs={12}>
            <ul className="ul-ecommerce">
              <li>
                <a href="#">INICIA TU RESERVA</a>
              </li>
            </ul>
          </Grid>
          <Grid item md={3}>

          </Grid>
      </Grid>
      </Container>

      <Container>
        <Grid item md={4} xs={12}>
          <Typography variant="h5" gutterBottom>
                Seleccione fecha de reserva:
          </Typography>
        </Grid>
        <Grid item md={8} xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Fecha de inicio"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="Fecha Fin"
          inputFormat="dd/MM/yyyy"
          value={value2}
          onChange={handleChange2}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        </Grid>
        <Grid item md={12}>
            <Typography variant="h4">
                Tips a tener en cuenta
            </Typography>
        </Grid>
        <Grid item md={3}>
           
        </Grid>
      </Container>

</>
    );

}

export default Reserva;