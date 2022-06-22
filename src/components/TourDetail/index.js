
import { useState } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";
import "./index.css";


const TourDetail = ({ itinerario, precio }) => {

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(!open);
  
  const [tour, setTour] = useState({
    tour_id: 0
  });


  return (
    <div>
      <p>
        <Button className="button-basket-detalle"
          onClick={handleOpenDialog}
          variant="contained"
          color="success">
          Detalle del Tour
        </Button>
      </p>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <h4>Detalle del Tour</h4>
          <h3>Itinerario: </h3>
          <p>{itinerario}</p>
          <h3>Precio: </h3>
          <p>{precio}</p>
          <p className="container-buttons">
            <Button className="button-basket"
              onClick={handleOpenDialog}
              variant="contained"
              color="secondary">Cerrar</Button>
             <Button className="button-basket"
              onClick={handleOpenDialog}
              variant="contained"
              color="secondary">Ver más detalles</Button>
          </p>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default TourDetail;