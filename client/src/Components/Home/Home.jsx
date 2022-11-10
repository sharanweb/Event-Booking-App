import "./Home.css";
import Container from "@mui/material/Container";
import { Box, Button, Divider } from "@mui/material";
import { Calender } from "../Calender/calender";
import Link from "@mui/material/Link";
import { Typography } from '@mui/material';

export const Home = () => {
  return (
    <div className="homemainpage">
      <Box sx={{ height: 40, mt:0.7, backgroundColor:"rgb(251, 180, 84)", color:"rgb(51, 48, 228)" }}>

      </Box>
      <Container>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              padding: 2,
              height: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Link href="/book">
                <Box
                  sx={{
                    width: 150,
                    height: 50,
                    padding: 1,
                    display: "flex",
                    justifyContent: "space-around",
                    backgroundColor: "rgb(217, 248, 196)",
                    borderRadius: 2,
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4206/4206324.png"
                    className="buttonimage"
                  ></img>
                  <h2 className="createname">Create</h2>
                </Box>
              </Link>
            </Box>
            <Divider></Divider>
            <Box sx={{}}>
              <Calender></Calender>
            </Box>
          </Box>
          <Box sx={{ width: 700, height: 430 }}>
            <img
              src="https://img.freepik.com/free-vector/appointment-booking-with-man-checking-calendar_23-2148558747.jpg?w=2000"
              className="homedivwelcome"
            ></img>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
