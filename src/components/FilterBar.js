import React from 'react';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

export default function FilterBar(props) {
    return (
        <FormGroup >
            <FormControlLabel control={<Checkbox defaultChecked /> } label="PRICE" />
        </FormGroup>
    )
}
