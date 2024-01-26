import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardExample() {
    return(
        <Card sx={{ transition: '0.5s', '&:hover': { transform: 'scale(1.05)'}}}>
            <CardActionArea>
                <CardMedia component='img' image='https://picsum.photos/1000/200' height='200' alt="imagen random"></CardMedia>
                <CardContent>
                    <Typography variant="h5">Title</Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore numquam, nobis placeat mollitia odit deleniti fugiat assumenda quaerat quia sapiente aliquam maxime cum voluptas illum ab commodi perferendis omnis.</Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button variant='contained'>Share</Button>
                <Button variant='outlined'>Learn more</Button>
            </CardActions>
        </Card>
    )
}