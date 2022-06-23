import { useEffect, useState } from "react";
import { Typography, Grid, Paper, ButtonBase } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import { getOrderUser } from "../../service/profile.js";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";


const OrderUser = () => {
  const { user } = useContext(UserContext);
  const [userOrder, setUserOrderDetail] = useState([]);

  const token = localStorage.getItem("token");
  const decodetoken = JSON.parse(token);
  sessionStorage.getItem("token");
  sessionStorage.getItem("user");

  const idProfile = decodetoken.user_id;

  const fetchUserOrders = async () => {
    const response = await getOrderUser(idProfile);
    setUserOrderDetail(response.content.Compra);
  };

  useEffect(() => {
    fetchUserOrders();
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }


  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (

    <div>
      <Container>
      <Grid container>
        <Grid item md={12}>
      <Typography variant="h4">
        Mis Compras:
      </Typography>
      </Grid>
      </Grid>
        {userOrder.map((order) => (
          <Grid container sx={{ padding: "1rem", backgroundColor: "#DCDFE1", borderRadius:"10px",marginTop:"10px", marginBottom:"5px"}}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
                <Grid item xs={6} md={4}>
                  <Typography variant="h7">
                   Hora y fecha de compra: {order.compra_hora} {order.compra_fecha} 
                  </Typography>
                </Grid>
                <Grid item xs={6}  md={2}>
                  <Typography variant="h7">
                    N° de compra: {order.compra_nro}
                  </Typography>
                </Grid>
                <Grid item xs={6}  md={3} sx={{textAlign:"center"}}>
                  <Typography variant="h7">
                    Estado: {order.estado}
                  </Typography>
                </Grid>
                <Grid item xs={6}  md={3} sx={{textAlign:"center"}}>
                  <Typography variant="h7">
                    Precio Total: {order.compratour_total}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>    
            <>
            {
              order.compratours.map((tour) => (
                <Grid container spacing={2} sx={{ marginTop: "5px", width: "100%", borderBottom: "solid 0.5px #E2E8EC" }}>
                  <Grid item md={2} xs={12}>
                    <ButtonBase sx={{ width: 200, height: 128, objectFit:"cover", marginLeft:"5px"}}>
                      <Img alt="complex" src={tour.tour.tour_foto1} />
                    </ButtonBase>
                  </Grid>
                  <Grid item md={10} xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          {tour.tour.tour_nombre}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Tour comprado : {tour.compratour_cantidad}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         Estado : {order.estado}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                        Fecha Inicio del Tour : {tour.tour.tour_fecha_inicio} || Fecha Fin del tour : {tour.tour.tour_fecha_fin}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item >
                      <Typography variant="subtitle1" component="div">
                        S/{order.compratours[0].tour_precio_oferta}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))

            }
            </>

          </Grid>))}
  </Container>
    </div>
  );

}

export default OrderUser;