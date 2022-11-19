import {
    List
  } from '@mui/material';
import Pets from '@mui/icons-material/Pets';

export default function Favorites (props) {
  const createEntry = (i) => {
    return (
      <List sx={{ fontFamily: "dogica", fontSize: 15, fontWeight: 900, lineHeight: 1.5} }> {<Pets sx={{ fontSize: 12}} />} {i.name} </List>
    );
  };
  
  const listData = props.list
  const list = listData.map(createEntry) 

  return <List>{list}</List>
  }