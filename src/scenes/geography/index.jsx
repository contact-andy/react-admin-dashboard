import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";

const Geography =() =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">    
                <Header title="Geography Chart" subTitle="Simple Geography Chart"/>
            </Box>
            <Box height="75vh" border={` 1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeographyChart/>
            </Box>
        </Box>
    )
}
export default Geography;