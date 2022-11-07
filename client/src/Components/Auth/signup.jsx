import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as Linked, Navigate } from "react-router-dom";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import "./auth.css";

//import background from "../images/background.jpg"

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        book2meet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export const SignUp = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  //const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  //console.log(formData)

  const handleChange = (e) => {
    const { value, name } = e.target;
    //console.log(e.target.value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/signup", formData)
      .then((res) => {
        if (res.data.token) {
          enqueueSnackbar("registration successfull");
          navigate("/signin");
        }
      })
      .catch((err) => {
        enqueueSnackbar("Failure! try again");
      });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup_main">
      <Container component="main">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ margin: 0, padding: 0, alignItems: "center" }}>
            <Box
              sx={{
                maxWidth: 450,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: 0.5,
                padding: 2,
                mt: 6,
                borderColor: "grey.300",
                backgroundColor: "white",
                borderRadius: 5,
                boxShadow: 3,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      value={formData.firstName}
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      onChange={handleChange}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      value={formData.lastName}
                      label="Last Name"
                      name="lastName"
                      onChange={handleChange}
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
          <img
            src="https://www.kindpng.com/picc/m/780-7807187_blue-calendar-icon-png-transparent-png.png"
            alt="jhsdjhsDKJhksdj"
            className="logoa"
          ></img>
        </Box>

        <Copyright sx={{ mt: 4 }} />
      </Container>
    </div>
  );
};
