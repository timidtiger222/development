import React from 'react';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

export default function SortBar(props) {
    return (
        <FormGroup >
            <FormControlLabel control={<Checkbox defaultChecked /> } label="PRICE" />
        </FormGroup>
    )
}
