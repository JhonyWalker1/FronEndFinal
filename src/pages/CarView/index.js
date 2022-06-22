import { useContext, useState, useEffect } from "react";
import { Container, Grid, Button, Card, CardContent } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { postCompraTourService } from "../../service/tour";

const CarView = () => {
  const { basket, addOrRemoveProduct, user } = useContext(UserContext);

  const token = localStorage.getItem("token");
  const decodetoken = JSON.parse(token);
  const idProfile = decodetoken.user_id;
  const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);
  const [total, setTotal] = useState(0);

  const calculatePrice = () => {
    let sum = 0;
    basket.forEach((product) => {
      const finalPrice = +product.quantity * +product.tour_precio;
      sum += finalPrice;
    });
    setTotal(sum.toFixed(2));
  };

  useEffect(() => {
    calculatePrice();
  }, [basket]);

    
  
  const handlePostCompra = async () => {
    let nroOrden = Math.floor(Math.random() * 1000000);
    
    // Logica de ordenamiento de datos
    let compraDetalle = [];
    basket.forEach((product) => {
      compraDetalle.push({
        tour_id: product.tour_id,
        cantidad: product.quantity,
        precio: total,
      });
    });
    let data = {
      compra_fecha: fecha,
      compra_nro:nroOrden,
      user_id: idProfile,
      estado:"Pagado",
      compratours: compraDetalle,
    };
    console.log(data)
    const response = await postCompraTourService(data);
    console.log(response);
    localStorage.removeItem("basket");
    window.location.href = "/gracias";
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={5}>
        <Grid item md={8}>
          <h2>Carrito de Tours:</h2>
          <Grid container spacing={3}>
            {basket.map((product) => (
              <Grid item md={12}>
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={3}>
                        <img
                          width={200}
                          style={{ objectFit: "contain" }}
                          src={product.tour_foto}
                          alt=""
                        />
                      </Grid>
                      <Grid item md={3}>
                        <h4>{product.tour_nombre}</h4>
                      </Grid>
                      <Grid item md={3}>
                        <p>$ {product.tour_precio}</p>
                      </Grid>
                      <Grid item md={3}>
                        <div>
                          <Button
                            onClick={() =>
                              addOrRemoveProduct(product.tour_id, false)
                            }
                          >
                            <RemoveRoundedIcon />
                          </Button>
                          &nbsp;&nbsp;
                          {product.quantity}
                          &nbsp;&nbsp;
                          <Button
                            onClick={() =>
                              addOrRemoveProduct(product.tour_id, true)
                            }
                          >
                            <AddRoundedIcon />
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardContent>
              <h3>Review Order Details</h3>
              <p>
                Sub-Total <span>$ {total}</span>
              </p>
              <p className="container-buttons">
                <Button
                  variant="contained"
                  size="large"
                  onClick={handlePostCompra}
                >
                  Book Now
                </Button>
                <Button variant="contained" color="error">
                  Delete
                  <DeleteForeverRoundedIcon />
                </Button>
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarView;
