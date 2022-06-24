
import {Carousel} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import LoyaltyRoundedIcon from '@mui/icons-material/LoyaltyRounded';
import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./index.css";
import {getDataFromTourDetail} from '../../service/tour'




//const CotiTours = () => {
//TourDetail
const CotiTours = () => {

  const { id } = useParams();

  const [tour, setTour] = useState("");

  const fetchTourDetail = async () => {
    const response = await getDataFromTourDetail(id);
    console.log("response", response);
    setTour(response.content);
  }

  useEffect(() => {
    fetchTourDetail();
  }, [])

  return ( 
    <Grid container spacing={2}>
      <Grid item md={12}>
      <h1><Card.Text>
      {tour.tour_nombre}
      </Card.Text>
      </h1>
        </Grid>   
      <Grid item md={8} xs={12}>
        <Card style={{ width: '40rem' }}>
          {/* comienzo de carrucel */}
          <Card.Body>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={tour.tour_foto1}
                  alt="Laguna de Huacachina"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={tour.tour_foto2}
                  alt="La Bruja de Cachiche"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={tour.tour_foto3}
                  alt="Reserva de Paracas - Ica"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={tour.tour_foto4}
                  alt="Reserva de Paracas - Ica"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={tour.tour_foto5}
                  alt="Reserva de Paracas - Ica"
                />
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
      </Grid>


      {/* final del carrucel */}


      {/* inicio del card */}

      <Grid item md={4}>
        <Card>
          <div>
            <h2 class="valor">S/ 74.90</h2>
          </div>
          <div class="precio-normal">
          <Card.Text>
          <strike>
          {tour.tour_precio}
          </strike>&nbsp;&nbsp;Precio Normal
          
          </Card.Text>
          </div>
          <div class="but_uno">
            <Button variant="outlined" color='primary'>COMPRAR</Button>
          </div>
          <div class="but_dos">
            <Button variant="outlined"
              color='primary'
              startIcon={<AddShoppingCartRoundedIcon />}>AÑADIR AL CARRO</Button>
              <Card.Text></Card.Text>
              <Card.Text>
              Stock&nbsp;&nbsp;<em><u>{tour.tour_stock}</u></em>&nbsp;&nbsp;Disponible
              </Card.Text>
          </div>
          <Card.Text></Card.Text>
          <p class="precio-normal">Yo{<LoyaltyRoundedIcon />}Viajar</p>
          
          <img
          class="img_fam"
          src='https://thumbs.dreamstime.com/b/familia-con-las-maletas-en-el-fondo-blanco-130294664.jpg'
          alt=''
          />
        </Card>
      </Grid>

      {/* inicio de los card de CONDICIONES*/}
      
      <Grid item md={4}>
        <Grid item md={6} xs={12}>
          {/* primera fila de CONDICIONES*/}
          <Grid>
            <Card style={{ width: '25rem' }}>
            <div class="Box">
              <Card.Body>
                <Card.Title><strong>Información</strong></Card.Title>
                <Card.Text>
                  {tour.tour_descripcion}
               
                </Card.Text>
                <Card.Text>
                 
                </Card.Text>
              </Card.Body>
              </div>
            </Card>          
          </Grid>
          <br /><div>
            <h3 class="mas_promo">Más Promociones</h3>
          </div>
        </Grid>
      </Grid>
      

      
      <Grid item md={4}>
        <Grid item md={6} xs={12}>
          {/* segunda fila de CONDICIONES*/}
          <Grid>
            <Card style={{ width: '25rem' }}>
            <div class="Box">
              <Card.Body>
                <Card.Title><strong>Itinerario</strong></Card.Title>
                <Card.Text>
                  {tour.tour_itinerario1}
                  {tour.tour_itinerario2}
                  {tour.tour_itinerario3}
                  {tour.tour_itinerario4}
                  {tour.tour_itinerario5}
                </Card.Text>
                <Card.Text>                
                </Card.Text>
              </Card.Body>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Grid>
     

     
      <Grid item md={4}>
        <Grid item md={6} xs={12}>
          {/* tercera fila de CONDICIONES*/}
          <Grid>
            <Card style={{ width: '25rem' }}>
            <div class="Box">
              <Card.Body>
                <div class="titlevigencia">
                <Card.Title><strong>Más Detalles</strong></Card.Title>
                <Card.Text>
                  Incluye: 
                  {tour.tour_incluye}
                </Card.Text>   
                <Card.Text>
                  No Incluye: 
                  {tour.tour_noincluye}
                </Card.Text>             
                <Card.Text>
                 Desde&nbsp;&nbsp;{tour.tour_fecha_inicio}
                </Card.Text>
                <Card.Text>
                  Hasta&nbsp;&nbsp;{tour.tour_fecha_fin}
                </Card.Text>
                </div>
              </Card.Body>
              </div>             
            </Card>
          </Grid>
        </Grid>
      </Grid>
     


      {/* fila de Cards viajeros */}

      {/* Primera fila */}

      <Grid item md={4}>
        <Grid item md={6} xs={12}>
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="http://www.peru-tours.com.pe/tarapoto/lago_lindo_tarapoto.jpg" />
            <Card.Body>
              <Card.Title>Tarapoto</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Puerto Palmeras</Card.Subtitle>
              <Card.Text>
                Descubra los mejores tours de Tarapoto y consiga ofertas para su viaje.
                Contacte ya ! Disfrute de la naturaleza.
              </Card.Text>
              <Button variant="outlined" color="primary">Más Información</Button>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>

      {/* Segunda fila */}
      <Grid item md={4}>
        <Grid item md={6} xs={12}>
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="http://www.traveltoperusites.com/wp-content/uploads/2019/06/paquete-fiestas-patrias-cusco02.jpg" />
            <Card.Body>
              <Card.Title>Cusco</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Machu Picchu</Card.Subtitle>
              <Card.Text>
                La mejor experiencia en exploraciones del mundo. Explora Machu Picchu
                y Valle Sagrado. Tours a Machu Picchu.
              </Card.Text>
              <Button variant="outlined" color="primary">Más Información</Button>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>

      {/* tercera fila */}
      <Grid item md={4}>
        <Grid item md={6} xs={12}>
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="https://www.magicalperuexpeditions.com/wp-content/uploads/2019/10/Atracciones-turisticas-en-Peru.jpg" />
            <Card.Body>
              <Card.Title>Tumbes</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Punta Sal</Card.Subtitle>
              <Card.Text>
                Conoce Mancora Punta Sal con los Paquetes Turisticos Mancora
                Punta Sal que Paquetes Turisticos
              </Card.Text>
              <Button variant="outlined" color="primary">Más Información</Button>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>

    </Grid>

  )
}
export default CotiTours;