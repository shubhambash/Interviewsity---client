import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';



export default function SelectSmall() {
  

  
  const navigate = useNavigate()
  const handleChange = (event) => {
   
    navigate(`/${event.target.value}`)
  };
  return (
    <FormControl color='secondary' sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small"><span style={{color : 'white'}}>{localStorage.getItem("name")}</span></InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value=""
        label={localStorage.getItem("name")}
        onChange={handleChange}
      >
        
        <MenuItem value="profile">Profile</MenuItem>
        <MenuItem value="problemset">Problemset</MenuItem>
        <MenuItem value="logout">Logout</MenuItem>
      </Select>
    </FormControl>
  );
}
