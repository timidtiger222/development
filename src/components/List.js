import {
    List
  } from '@mui/material';

export default function Favorites (props) {
  const createEntry = (i) => {
    return (
      <List>{i.name}</List>
    );
  };
  
  const listData = props.list
  const list = listData.map(createEntry) 

  return <List>{list}</List>
  }