import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
/* import swal from "sweetalert"; */
import { UserContext } from "../../Context/UserContext";
import { useState,useContext } from "react"; 
import swal from "sweetalert";



const Login = () => {

  const { storeUser } = useContext(UserContext);

/*   const [user,setUser] = useState(null); */

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClickLogin = async () => {
    try{
      await fetch ("https://apibackendtour.herokuapp.com/eccomerce/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      
    })
      .then((res) => res.json())
      .then((data) => {
        /* console.log(data); */
          var base64Url = data.access.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));

          console.log(JSON.parse(jsonPayload));

          localStorage.setItem("token", jsonPayload);
          sessionStorage.setItem("token", jsonPayload);
          console.log("data",userData);
          storeUser(userData);
          console.log(storeUser);
          swal("Bienvenido a Codigo-Travel", "", "success");
          setTimeout(()=>{
            window.location.href = "/"; 
          },1000)
          
    
      });
    }catch(err){
      swal({
          title: "Error",
          text: "Usuario no encontrado",
          icon: "error",
      })
      return;
    }

   /*  const { email, password } = userData;
    let response = await loginUser(email, password);
    if (!response.ok) {
      response = await storeUserFirebase(email, password);

      if (!response.ok) {
        swal({
          title: "Error",
          text: "Error al encontrar usuario",
          icon: "error",
        });

        return;
      }
    }
    storeUserFirebase(response.data.user);
    window.location.href = "/home"; */
  };

  return (
    <Grid
      container
      alignItems="center"
      
      sx={{ height: "100vh", padding: 20, backgroundColor: "#3198D3" }}
    >
     
      <Grid item md={6} xs={12}>
        <img /* src={bgLogin} */ width={600} alt="" />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <h5>Welcome to</h5>
            <h3>Codigo Travel</h3>
            <p>Pronto disfrutarás una verdadera experiencia de aventura</p>
            <Grid container spacing={3} mt={5}>
              <Grid item md={12}>
                <TextField
                  label="Gmail"
                  fullWidth
                  name="email"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  label="Password"
                  fullWidth
                  name="password"
                  type="password"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  sx={{ backgroundColor: "#000" }}
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleClickLogin}
                >
                  Iniciar Session
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
