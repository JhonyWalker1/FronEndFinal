import { useState, useContext } from "react";
import { Container, Grid, Button, TextField } from "@mui/material";

import { createUser, imageUser } from "../../service/signup.js";

/* import { useFormik } from "formik"; */
import swal from "sweetalert";

/* import { wait } from "@testing-library/user-event/dist/utils"; */
import "./index.css";

const Signup = () => {
  const [values, setValues] = useState({
    cliente_nombre: "",
    cliente_apellido: "",
    email: "",
    password: "",
    cliente_telefono: "",
    cliente_direccion: "",
    cliente_pais: "",
    cliente_ciudad: "",
    cliente_fecha_nacimiento: "",
    cliente_foto: "",
  });

  const handleChangeInput = async (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const fetchCreateUser = async () => {
    const response = await createUser(values);
    console.log(response);
    swal("Bienvenido a Codigo-Travel", "", "success");
    window.location.href = "/profile";
  };

  const fetchImageUser = async (e) => {
    const image = e.target.files[0];
    const response = await imageUser(image);
    setValues({
      ...values,
      cliente_foto: response.content.public_id,
    });
  };

  return (
    <Container maxWidth="md" className="contenedor">
      <form id="Myform">
        <Grid container spacing={1} className="contenedor_center">
          <Grid item md={12} xs={12}>
            <h2>Crear Cuenta</h2>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Nombre"
              name="cliente_nombre"
              fullWidth
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Apellidos"
              name="cliente_apellido"
              fullWidth
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Correo"
              name="email"
              type="email"
              fullWidth
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Password"
              name="password"
              fullWidth
              type="password"
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Nro de Celular"
              name="cliente_telefono"
              fullWidth
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Direccion"
              name="cliente_direccion"
              fullWidth
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="País"
              name="cliente_pais"
              fullWidth
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Ciudad"
              name="cliente_ciudad"
              fullWidth
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Fecha de Nacimiento"
              name="cliente_fecha_nacimiento"
              type={"date"}
              fullWidth
              focused
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Foto"
              name="cliente_foto"
              type={"file"}
              fullWidth
              focused
              onChange={fetchImageUser}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={fetchCreateUser}
            >
              Crear Cuenta
            </Button>
          </Grid>
          <h4>¿Ya tienes una cuenta?</h4>
          <Grid item md={12} xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Iniciar Sesión
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Signup;
