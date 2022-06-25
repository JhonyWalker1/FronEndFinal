import { Container,Grid } from "@mui/material";


const FinalView = ()=>{
    return(
        <Container>
            <Grid container spacing={3}>
                <Grid item md={8}>
                    <h2>Muchas gracias por tu compra</h2>
                    <h3>Esperamos que tu experiencia
                        sea gratificando</h3>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FinalView;