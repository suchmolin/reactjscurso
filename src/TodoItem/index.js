import React, { useState } from 'react';
import './TodoItem.css';
import DoneIcon from '@mui/icons-material/DownloadDoneOutlined';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteForever';

function TodoItem(props) {
  const condicionColor = props.completed ? "success" : "default"


  return (
    <li className="TodoItem">
      <IconButton 
        color={condicionColor}
        onClick={props.onComplete}  
        sx={{
          marginLeft:"10px"
        }}
      >
          <DoneIcon 
            sx={{
              fontSize:"35px"
            }}
          />
      </IconButton>

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <IconButton 
        
        onClick={props.onDelete} 
        sx={{
          marginTop:"-70px",
          "&:hover": {
            color:"#F13030",
          }
        }}
      >
          <DeleteIcon 
            sx={{
              fontSize:"35px"
            }}
          />
      </IconButton>
      
    </li>
  );
}

export { TodoItem };