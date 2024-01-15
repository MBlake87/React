import { Box } from "@mui/material";
import { styled } from "@mui/system"

//component to make easy reuse of styling
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

export default FlexBetween