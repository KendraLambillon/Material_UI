import { Box, Button, Container, Grid, Typography } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

export default function App() {
  return(
    <>
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
        <Button variant="contained" startIcon={<AccessTimeIcon />}>Mi primer boton</Button>
        <Button variant="outlined" endIcon={<AddLocationIcon />} color="success">Boton</Button>
        <Button variant="text" startIcon={<AddBusinessIcon />} color="secondary">Boton</Button>
      </Container>
      <Container maxWidth='sm'
      sx={{ border:2, boxShadow: 3, pb: 2, m: 3}}>
        <Grid container>
          <Grid item sm={6} md={4}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit, id porro sit veniam inventore accusamus distinctio quam expedita, libero quaerat omnis quasi tenetur quia. Quia dolores maiores veritatis tenetur.</p>
          </Grid>
          <Grid item sm={6} md={4}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis quod voluptates earum perferendis sit doloremque exercitationem, aliquid ad ab maiores minima placeat officiis quibusdam quis cum deserunt inventore alias.</p>
          </Grid>
          <Grid md={4}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perferendis atque mollitia cum autem consequuntur modi dicta, possimus harum dolores eum, aperiam a soluta facere molestias, cupiditate iure velit sapiente?</p>
          </Grid>
        </Grid>

      </Container>
    </>
  )
}