import { Box, Button, Container, Typography } from "@mui/material";

export default function App() {
  return(
    <Container maxWidth='sm'
    sx={{ border:2, boxShadow: 3, pb: 2, m: 3}} >
      <h1>Primeros elementos</h1>
      <Typography variant="h1" component='h2'>
        Titulo 1
      </Typography>
      <Typography variant="h1" component='h3'>
        Titulo 2
      </Typography>
      <Typography variant="h1" component='h1' textAlign='center' color='blue' mt={5}>
        Titulo 3
      </Typography>
      <Typography variant="h1" component='h2' textAlign='center' color='gray' mt={5}>
        Primeros componentes
      </Typography>
      <Box sx={{ border:2, m:4, p:2, bgcolor:'lightgray', borderColor:'gray'}}>
        <Typography variant="h4" component='span'>Nueva Box</Typography>
      </Box>
      <Button variant="contained">Mi primer boton</Button>
    </Container>
  )
}