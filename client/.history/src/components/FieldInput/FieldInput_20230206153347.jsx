import React from 'react';
import "./FieldInput.css";
import { FormControl, IconButton, InputLabel, OutlinedInput } from '@mui/material';
import { HighlightOffRounded } from '@mui/icons-material';

export default function FieldInput(props) {

  return (
    <div className='field-input'>
        <FormControl variant="outlined" sx={{width: 0.5}}>
          <InputLabel>Field Name</InputLabel>
          <OutlinedInput
            label="Tên trường"
            sx={{borderRadius: "5px 0px 0px 5px", backgroundColor: "#dddddd"}}
            onChange={(event) => {
                props.onChangeFieldName(event, props.index);
            }}
          />
        </FormControl>
        <FormControl variant="outlined" sx={{width: 0.5, pr: 4}}>
          <InputLabel>Field Value</InputLabel>
          <OutlinedInput
            label="Giá trị trường"
            sx={{borderRadius: "0px 5px 5px 0px"}}
            onChange={(event) => {
                props.onChangeFieldValue(event, props.index)
            }}
          />
        </FormControl>
        <div className='delete-icon'>
          <IconButton>
            <HighlightOffRounded></HighlightOffRounded>
          </IconButton>
        </div>
    </div>
  )
}
