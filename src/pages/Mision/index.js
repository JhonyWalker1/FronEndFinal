import React from "react";
import Card from 'react-bootstrap/Card';
import { Grid } from "@mui/material";
import co from "../../assets/Image/comun.png";


const MisionView = () => {
  return (

    <Grid container md={12}>
     <Grid item md={6} xs={12}  className="miss-tur">
      <Card style={{ width: '25rem' }}>    
    <Card >
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title><h1>Misión</h1></Card.Title>
      <Card.Text>
      Llegar ser una Agencia de Viajes reconocida en nuestra región, por la confianza y seguridad que le ofrecemos a nuestros clientes, presentando innovadores servicios y asegurando una actividad turística estable, promoviendo un ambiente de buenas relaciones y obteniendo la mayor satisfacción de nuestros clientes..
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">CodiGO-13</Card.Footer>
  </Card>
  </Card>
  </Grid>

  <Grid item md={6}>
        <Grid item md={6} xs={12}>
        <Card style={{ width: '30rem' }}>  
          
                 <Card>
                     <img src={co} alt="" style={{height:'50vh' }} />
                 </Card>   
         </Card> 
    </Grid>
   
    </Grid>
   
</Grid>
);
}
export default MisionView;