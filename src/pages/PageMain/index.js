import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { getAtractivo } from "../../service/firestore";
import "./index.css";
import { Card,CarouselItem,CarouselCaption,Carousel, Button } from "react-bootstrap";

const PopularRegion = () => {
  const [region, setRegion] = useState([]);

  const fetchRegion = async () => {
    const data = await getAtractivo();
    console.log(data);
    setRegion(data);
  };

  const handleClick = async (name) => {
    if (name === "costa") {
      window.location.href = "/mastour";
         return;
     } else if (name === "sierra") {
        window.location.href = "/mastour";
        return;
      } else if (name === "selva") {
        window.location.href = "/mastour";
        return;
      }
    
      // Profesor porque en la pagina home donde esta mis cards automaticamente 
      // se redirige a cualquiera de las pag de mis if sin yo hacer el click en ver más
    
  }

  useEffect(() => {
    fetchRegion();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container mt={1}>
        <Carousel fade className="carousel-width">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.ytuqueplanes.com/imagenes/fotos/novedades/zona-de-anfiteatro.jpg"
              alt="marcahuasiLima"
              
            />
            <Carousel.Caption>
              <h1>Lima</h1>
              <p >Marcahuasi bosque de Piedras</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://cdn.getyourguide.com/img/location/5963815c2dc3b.jpeg/88.jpg"
              alt="islasBallestasIca"
              
            />
            <Carousel.Caption>
              <h1>Ica</h1>
              <p>IslasBallestas</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://selina-res.cloudinary.com/image/upload/if_iw_gt_1584,c_scale,w_1584/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/1xZZEml4gStiyXtt8VgJGB/8790e0e2b34a9a7b002aff36f04ec26b/Selina_Mancora_Surf_Lifestyle_01-2021_credits_AlexanderEstrada_.jpeg"
              alt="mancoraPiura"
              
            />
            <Carousel.Caption>
              <h1>Piura</h1>
              <p>Mancora</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Grid item md={12} sm={12} xs={12}>
          <h1 style={{textAlign:"center", margin:"20px"}}>Popular Region</h1>
        </Grid>
        {region.length > 0 &&
          region.map((reg) => (
            <Grid item md={4} sm={6} xs={12} className="card-pr">
              <Card style={{ width: "30rem", height:"100%", marginLeft:"5px", textAlign: "center"}}>
                <Card.Img variant="top" src={reg.photo} style={{height:"300px"}} />
                <Card.Body>
                  <Card.Title>{reg.nombre}</Card.Title>
                  <Card.Text>
                  {reg.contenido}
                  </Card.Text>
                  <Button variant="outline-primary" 
                  size="lg" 
                  className="btn-vermas" 
                   onClick={()=>handleClick(reg.nombre)}  
                  >
                    Ver más</Button>{' '}
                </Card.Body>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default PopularRegion;
