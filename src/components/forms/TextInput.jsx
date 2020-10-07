import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const TextInput = (props) => {
    return(
        <TextField 
            // id="standard-basic" 
            // label="Standard"
            fullWidth={true}
            label={props.label} 
            margin={"dense"}
            multiLine={props.multiLine}
            rows={props.rows}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
        />
    )
}

export default TextInput;