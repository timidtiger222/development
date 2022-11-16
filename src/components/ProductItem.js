import React from 'react';
import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

/* Card template from mui/material */
export default function ProductItem(props) {
    return (
        <Card sx={{ maxWidth: 500}}>
            <CardMedia
              component="img"
              height="400"
              image={props.item.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.item.name}
                <Typography variant="h6" color="text.primary">
                ${props.item.price}
              </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.item.size}
              </Typography>
            </CardContent>
          <CardActions>
            <Button variant="contained"> Add to Favorites </Button>
          </CardActions>
        </Card>
      );
    }
