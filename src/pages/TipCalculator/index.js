import { useState } from "react";
import { Button, TextField } from "@mui/material";

const CalculateTip = () => {

    const [montototalpropina, setMontototalpropina] = useState(0);
    const [propina, setPropina] = useState(0);
    const [propinaporpersona, setPropinaporpersona] = useState(0);

    const obtenerValor = (e) => {
        const { value } = e.target;
        setPropina(value);
    }

    const calcular = () => {
        let montoTotal = document.getElementById('montototalpagado').value;
        let totalPersonas = document.getElementById('cantidadpersonas').value;
        let porcentaje = propina;
    
        let tip = (montoTotal * porcentaje) / 100;
        let tipxpersona = tip / totalPersonas;
        setMontototalpropina(tip);
        setPropinaporpersona(tipxpersona);
        console.log(montoTotal,porcentaje);
        console.log(tip);
    }
   

    const reset = () => {
        document.getElementById('amount').value = "";
        document.getElementById('tiptext').value = "";
        document.getElementById('cantpeople').value = "";
        setPropinaporpersona(0);
        setMontototalpropina(0);
    }

    return (
        <>
        {/* <h1>tip calcutator</h1>
        <form>
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input type="text" className="form-control" id="amount" placeholder="Enter amount" />
            </div>
            <div className="form-group">
                <label htmlFor="tip">Tip percentage</label>
                <input type="text" className="form-control" id="tip" placeholder="Enter tip percentage" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={calcular}>Submit</button>

            <p>The tip is ${values}</p>
        </form> */}

        <h1>Calculador de propinas</h1>
        <div>
            <div className="form-group">
                <label htmlFor="amount">Monto Total</label>
                <input type="text" className="form-control" id="montototalpagado" placeholder="Ingresa el monto total" />
            </div>
            <div className="form-group">
                <h1>Porcentaje de propina</h1>
                <Button
                id="tip"
                value="5"
                variant="contained"
                onClick={obtenerValor}
                >
                    5%
                </Button>
                <Button
                id="tip"
                value="10"
                variant="contained"
                onClick={obtenerValor}>
                    10%
                </Button>
                <Button
                id="tip"
                value="15"
                variant="contained"
                onClick={obtenerValor}>
                    15%
                </Button>
                <Button
                id="tip"
                value="25"
                variant="contained"
                onClick={obtenerValor}>
                    25%
                </Button>
                <Button
                id="tip"
                value="50"
                variant="contained"
                onClick={obtenerValor}>
                    50%
                </Button>
                <TextField
                label="Porcentaje de propina"
                id="tiptext"
                onChange={obtenerValor}
                /> 
                <TextField
                label="Cantidad de personas"
                id="cantidadpersonas" 
                />

            </div>
            <div className="form-group">
                <input type="button" onClick={calcular} value="Calcular"/>
            </div>
            <div className="form-group">
                <input type="button" onClick={reset} value="Resetear"/>
            </div>

            <p id="tipo">La propina Total es: S/. {montototalpropina.toFixed(2)}</p>           
            <p id="tipo">La propina por persona es: S/. {propinaporpersona.toFixed(2)}</p>
        </div>
        </>
    )
}

export default CalculateTip;