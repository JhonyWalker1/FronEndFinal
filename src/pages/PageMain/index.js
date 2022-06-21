import { Card,CarouselItem,CarouselCaption,Carousel, Button } from "react-bootstrap";
import { Container, Grid } from "@mui/material";
import "./index.css";

const PageMain = () => {


    return (
     <Container maxWidth="lg">
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
        </Grid>
        </Container>
    )
}
export default PageMain