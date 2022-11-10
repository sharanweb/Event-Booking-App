import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/auth.context";
import { TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Logout"];

export const Navbar = () => {
  const navigate = useNavigate();
  const { details, setDetails, loggedin, setLoggedin } =
    useContext(AuthContext);
  //console.log(details)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  //let names = JSON.parse(localStorage.getItem("username"));
  //console.log(names.user.firstName[0].toUpperCase() + names.user.lastName[0].toUpperCase());
  //let avname = names.user.firstName[0].toUpperCase() + names.user.lastName[0].toUpperCase()
  let avname;
  let first;
  const newhost = JSON.parse(localStorage.getItem("username"));
  if (newhost != null) {
    avname =
      newhost.user.firstName[0].toUpperCase() +
      newhost.user.lastName[0].toUpperCase();
    first = newhost.user.firstName;
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    localStorage.removeItem("username");
    setLoggedin(false);
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Box sx={{paddingLeft:2, paddingRight:2}}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{border:1, mr: 2, padding:1, borderRadius:2}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >book2meet</Typography>

          </Box>
          

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/about"></Link>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/meetings"} style={{ textDecoration: "none" }}>
                  <Typography textAlign="center">Meetings</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/about"></Link>
                <Typography textAlign="center">Calender</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            book2meet
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/meetings"} style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Meetings
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              {newhost != null ? (
                <Typography sx={{ mr: 1, color: "white" }}>
                  Welcome {first}
                </Typography>
              ) : (
                <Link to={"/signin"} style={{ textDecoration: "none" }}>
                  <Typography sx={{ mr: 1, color: "white" }}>Signin</Typography>
                </Link>
              )}
            </Box>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>{avname}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
