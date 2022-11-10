import "./Home.css";
import Container from "@mui/material/Container";
import { Box, Button, Divider } from "@mui/material";
import { Calender } from "../Calender/calender";
import Link from "@mui/material/Link";

export const Home = () => {
  return (
    <div className="homemainpage">
      <Container>
        <Box sx={{ mt: 2 }}>
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
            <Box sx={{ textAlign: "center", display:"flex", justifyContent:"space-around" }}>
              <Link href="/book">
                <Box sx={{ width: 150, height: 50, padding: 1, display:"flex", justifyContent:"space-around", backgroundColor:"rgb(217, 248, 196)" , borderRadius:2}}>
                  <img src="https://cdn-icons-png.flaticon.com/512/4206/4206324.png" className="buttonimage"></img>
                  <h2 className="createname">Create</h2>
                </Box>
              </Link>
            </Box>
            <Divider></Divider>
            <Box sx={{}}>
              <Calender></Calender>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Container>
    </div>
  );
};
