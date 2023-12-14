import React from "react"
import Stack from '@mui/material/Stack';
import GenericButton from "../../components/GenericButton";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


const HomeScreen:React.FC = () => {
    const navigate = useNavigate();
    const pageNames = [{
        label:"SPM UI Page",
        onClick:()=> {
            navigate("/homescreen/spmui")
        }
    }, 
    {
        label:"Configuration Page",
        onClick:()=> {
            navigate("/homescreen/configpage")
        },

    }
]
    
  return (
    <div className="container">
        <Typography variant="h6" gutterBottom>
       Home Screen
      </Typography>
      <Stack direction="row" justifyContent="space-around" sx={{ marginTop: '10rem' }}  spacing={10}>
        {pageNames.map(({label,onClick})=> <GenericButton
            key={label} 
            label={label}
            onClick={onClick}
            variant="outlined"
        />)}
     </Stack>
    </div>
  )
}

export default HomeScreen
