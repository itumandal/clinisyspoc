import React from "react"
import Header from "../../components/Header"
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import "./style.css"


const SPMUI:React.FC = () => {
    const workstations = ["Workstation 1", "Workstation 2", "Workstation 3"]
  return (
    <div>
      <Header title="SPM UI Page"/>
      <div className="spm-cards">
        <Card sx={{width:"20rem"}} className="card">Select the Workstation</Card>
        <Stack spacing={2} sx={{width:"15rem", marginTop:"2rem"}}>
           {
            workstations.map((workstation)=> <Card className="card">
            {workstation}
        </Card>)
           }
        </Stack>
      </div>
      
    </div>
  )
}

export default SPMUI
