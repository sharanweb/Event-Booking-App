import { Box, Button, Divider } from "@mui/material";
import { Calender } from "../Calender/calender";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export const Copyright = () => {
  return (
    <>
      <Box
        sx={{
          height: 30,
          mt: 5.2,
          backgroundColor: "rgb(186, 209, 194)",
          color: "grey",
          textAlign: "center",
          position:"static",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Typography sx={{ align: "centre", fontSize: 10 }}>
          Copyright © book2meet 2022.
        </Typography>
      </Box>
    </>
  );
};
