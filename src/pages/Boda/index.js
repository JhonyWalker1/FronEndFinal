import { Carousel } from "react-bootstrap";

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
            <h1 className="titulo">Jhonatan & Geraldine</h1>
            <div className="content">
                <h3 className="text">
                    Familia van a venir o nada? avisen pa no guardar comida
                </h3>
            </div>

        </div>
    )

}

export default BodaInvitacion;