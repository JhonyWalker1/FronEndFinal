import { useEffect, useState,useContext } from "react";
import {Container, Card, CardContent, CardMedia, Grid, Button} from "@mui/material";
import { getDataFromTour,getDataTourPorRegion } from "../../service/tour";
import TourDetail from "../../components/TourDetail";
import { UserContext } from "../../Context/UserContext";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Link,useParams } from "react-router-dom";

const Car = () => {   
    
    const {id_region} = useParams();

    const {basket, storeBasket,deleteElementFromBasket} = useContext(UserContext);

    const [tours,setTours] = useState([]);

    /* const fetchTourList = async () => {
        const ListTours = await getDataFromTour();

        console.logg("listTours.content", ListTours.content);
        setTours(ListTours.content);

    }; */

    const fetchTourListPorRegion = async () => {
      const response = await getDataTourPorRegion(id_region);
      setTours(response.content.Tour);
      console.log("response", response.content.Tour);

    }

    const ButtonForProduct = ({ tours })=> {
    const findProduct = basket.find((bas)=> bas.tour_id === tours.tour_id);
  
  
      return (
        <>
        { findProduct ? (
            <Button
            onClick={()=> deleteElementFromBasket(tours.tour_id)}
            className="button-basket" 
            variant="contained" 
            color="error">Delete<DeleteForeverRoundedIcon/>
            </Button>
          ) : (
            <Button 
            onClick={() => 
            storeBasket(tours)         
            } 
            className="button-basket" 
            variant="contained" 
            color="primary">+ Add to basket</Button>
          )}
        </>
      );
    };
  

    useEffect(()=>{
      fetchTourListPorRegion();
    },[]);    

    return(
        <Container>
          <h1>Tours</h1>
          <Grid container spacing={3}> 
          {
            tours.map((tours)=>(
             <Grid item md={6} lg={6} sm={12} xs={12}> 
             
              <Card className="card-tour">        
              <Link to ={`/compratours/${tours.tour_id}`}>     
                <CardMedia                
                component ="img" 
                className = "img-tour"
                image={tours.tour_foto1}
                />
                </Link>   
                <CardContent className="center">
                <h2>{tours.tour_nombre}</h2> 
               <p>
               <ButtonForProduct tours={tours}/>
            </p> 
                <TourDetail
                 itinerario={tours.tour_itinerario1} 
                 precio={tours.tour_precio_oferta} 
                 tours= {tours}                
                 />
                
                </CardContent>
              </Card>
             </Grid>
            ))}
          </Grid>    
        </Container>
    );
};

export default Car;