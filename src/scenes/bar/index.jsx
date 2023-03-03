import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const Bar =() =>{
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">    
                <Header title="Bar Chart" subTitle="Simple Bar Chart"/>
            </Box>
            <Box height="75vh">
                <BarChart/>
            </Box>
        </Box>
    )
}
export default Bar;