import React from 'react';
import {
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';

export default function FilterBar(props) {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Filter 1" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Filter 2" />
        </FormGroup>
    )
}
