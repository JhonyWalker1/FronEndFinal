import { useEffect, useState } from "react";
import {  Typography, Grid,Paper,ButtonBase   } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import { getOrderUser } from "../../service/profile.js";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";


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
    <Typography variant="h4">
         Mis Compras: 
    </Typography>
    <Paper
      sx={{
        p: 2,
        marginTop: "1rem",
        maxWidth: "100%",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
        {userOrder.map((order) => (
      <Grid container spacing={2} sx={{marginTop:"1rem",width:"100%",borderBottom: "solid 0.5px #E2E8EC",marginBottom:"25px"}}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 128 }}>
            <Img alt="complex" src={order.compratours[0].tour.tour_foto1} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              {order.compratours[0].tour.tour_nombre}
              </Typography>
              <Typography variant="body2" gutterBottom>
              Tour comprado : {order.compratours[0].compratour_cantidad}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {order.compra_nro}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              Fecha: {order.compra_fecha}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            S/{order.compratours[0].tour_precio_oferta}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

       ))}
    </Paper>
    </div>
    );

}

export default OrderUser;