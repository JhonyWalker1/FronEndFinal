import { Carousel,ListGroup,Table,Button  } from "react-bootstrap";

import boda1 from "../../assets/boda1.jpg";
import boda2 from "../../assets/boda2.jpg";
import boda3 from "../../assets/boda3.jpg";
import "./index.css" 

import yt from "../../assets/Image/youtube.png";



const BodaInvitacion = () =>{
    return(
        <div className="center">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-50"
                    src={boda1}
                    alt="First Slide"
                    />
                <Carousel.Caption>
                    <h3 className="car">Nuestra Boda</h3>
                    <p className="cardes">lorem qweqweqw</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-50"
                    src={boda2}
                    alt="First Slide"
                    />
                <Carousel.Caption>
                    <h3 className="car">Nuestra 2 Boda</h3>
                    <p className="cardes">lorem qweqweqw</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-50"
                    src={boda3}
                    alt="First Slide"
                    />
                <Carousel.Caption>
                    <h3 className="car">Nuestra 3 Boda</h3>
                    <p className="cardes">lorem qweqweqw</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h3 className="titulo">Jhonatan</h3>
            <h3 className="titulo">&</h3>
            <h3 className="titulo">Geraldine</h3>
            <div className="content">
                <h3>
                    Agradeceremos tu presencia en este día tan espacial para nosotros
                </h3>

                {/* <ListGroup horizontal className="my-2">
                    <ListGroup.Item className="w-33">Viernes 11 de Noviembre </ListGroup.Item>
                    <ListGroup.Item className="w-33">2022</ListGroup.Item>
                    <ListGroup.Item className="w-33">6 de la tarde</ListGroup.Item>
                </ListGroup>

                <Table striped bordered hover responsive="xl">
                    <thead>
                        <tr>
                            <th>Viernes 11 de Noviembre</th>
                            <th>2022</th>
                            <th>6 de la tarde</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Viernes 11 de Noviembre</th>
                            <th>2022</th>
                            <th>6 de la tarde</th>
                        </tr>
                    </tbody>
                </Table> */}

                <div className="contentdatos">
                    <div>
                        <h5>Viernes 11 de Noviembre</h5>
                    </div>
                    <div>
                        <h5>2022</h5>
                    </div>
                    <div>
                        <h5>6 de la tarde</h5>  
                    </div>

                </div>

                <div className="direct">
                    <h5>Te esperamos en: </h5>
                    <Button size="lg" variant="success" href="https://www.google.com/maps/place/Jir%C3%B3n+Gral.+Luis+La+Prta+221,+Santiago+de+Surco+15038/@-12.1326311,-76.9969939,21z/data=!4m5!3m4!1s0x9105b808ee964a4b:0x4ead35aee8ab9395!8m2!3d-12.1324669!4d-76.9970234">Nuestro hogar</Button>
                </div>

            </div>



        </div>
    )

}

export default BodaInvitacion;