import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import { BoltRounded, FormatBoldSharp } from '@mui/icons-material';

/* Card template from mui/material */
export default function ProductItem(props) {

  const addItem =()=> {
    props.setTotal(props.total + props.price);
    if(props.cart.includes(props.item) === false){
      props.setCart([...props.cart, props.item])
      props.count.current[props.name] = 1;
    } else {
      props.count.current[props.name] += 1;
    }
  }

    return (
        <Card sx={{ maxWidth: 400 } }>
            <CardMedia 
              component="img"
              height="300"
              image ={props.item.image}
            />
            <CardContent sx={{ margin: 0, backgroundColor: 'rgb(236, 236, 236)'} }>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "dogica", fontSize: 20, fontWeight: 900} }>
                {props.item.name}
                <Typography variant="h6" color="text.primary" sx={{ fontFamily: "dogica", fontSize: 16} }>
                ${props.item.price}
              </Typography>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: "dogica", fontSize: 11} }>
                SIZE: {props.item.size}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: "dogica", fontSize: 11} }>
                FUR LENGTH: {props.item.size}
              </Typography>
              <br></br>
              <Typography variant="body2" color="text.primary" sx={{ fontFamily: "dogica", fontSize: 10} }>
                {props.item.description}
              </Typography>
            </CardContent>
          <CardActions sx={{ backgroundColor: 'rgb(236, 236, 236)'} }>
            <Button sx={{ fontFamily: "dogica", fontSize: 10, margin: 1.5} } variant="contained" startIcon={<Favorite />} onClick={addItem}> Add to Favorites </Button>
          </CardActions>
        </Card>
      );
    }
