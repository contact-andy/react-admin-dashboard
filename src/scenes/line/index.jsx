import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import Header from "../../components/Header";

const Line =() =>{
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">    
                <Header title="LINE Chart" subTitle="Simple Line Chart"/>
            </Box>
            <Box height="75vh">
                <LineChart/>
            </Box>
        </Box>
    )
}
export default Line;