import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/700.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./book_card.css";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { blue } from "@mui/material/colors";
import { useState, useEffect, useContext } from "react";
import { DateContext } from "../Context/date.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const theme = createTheme();

const ITEM_HEIGHT = 35;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

//booking components
export const BookModal = () => {
  //storing data from select tag
  const [userData, setUserData] = useState([]);
  const { cdate, setCdate } = useContext(DateContext);
  console.log("sent to booking", cdate);
  const [formdata, setFormData] = useState({
    host: "",
    name: "",
    date: cdate.toLocaleString(),
    type: "onetime",
    fromtime: "",
    totime: "",
    guests: [],
    description: "",
  });
  const navigate = useNavigate();

  const theme = useTheme();

  //function to fetch user list to map options
  const getUser = () => {
    axios
      .get("https://book2meet.herokuapp.com/user")
      .then((res) => {
        setUserData(res.data.user);
      })
      .catch((res) => {});
  };

  //get the host from the local storage
  let hostDetail;
  let hostin = JSON.parse(localStorage.getItem("username"));
  if (hostin != null) {
    hostDetail = JSON.parse(localStorage.getItem("username")).user._id;
  }

  //console.log(hostDetail);

  //storing the names of multiple select into an array
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formdata, [name]: value });
  };

  //console.log(userData);
  //console.log(personName);
  //console.log(desc);

  const handleDateChange = (e) => {
    let datechange = { ...formdata };
    datechange.date = e.$d.toLocaleString();
    setFormData(datechange);
  };

  const handleFromTimeChange = (e) => {
    let timechange = { ...formdata };
    timechange.fromtime = e.$d.toLocaleString();
    timechange.host = hostDetail;
    setFormData(timechange);
  };

  const handleToTimeChange = (e) => {
    let timechange = { ...formdata };
    timechange.totime = e.$d.toLocaleString();
    setFormData(timechange);
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  console.log(formdata.guests);

  //function to post data from the form
  const handleClick = () => {
    console.log("clicked");
    axios
      .post(`https://book2meet.herokuapp.com/event/create`, formdata)
      .then((res) => {
        alert("Event Created Successfully");
        navigate("/meetings");
      })
      .catch((res) => console.log("eoor", res));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="bookback">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 450,
            mt: 2,
            backgroundColor: "white",
            padding: 2,
            borderColor: "black",
            boxShadow: 3,
            borderRadius: "16px",
            alignItems: "center",
            zIndex:5,
            opacity:3
            
          }}
        >
          <h1 className="title_of">Create Event</h1>
          <Box
            component="form"
            noValidate
            sx={{
              mt: 1.5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 400,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Event name"
              variant="outlined"
              name="name"
              value={formdata.name}
              onChange={handleTextChange}
              sx={{ width: 300 }}
              size="small"
              fullWidth
            ></TextField>
            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  value={formdata.date}
                  name="date"
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField {...params} size="small" sx={{ width: 300 }} />
                  )}
                />
              </LocalizationProvider>
            </Box>
            
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="From"
                  value={formdata.fromtime}
                  name="fromtime"
                  // onChange={(newValue) => {
                  //   //console.log(newValue.$d.toLocaleString())
                  //   setFrom(newValue.$d.toLocaleString());
                  // }}
                  onChange={handleFromTimeChange}
                  // onChange={handleFromChange}
                  renderInput={(params) => (
                    <TextField {...params} size="small" />
                  )}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="To"
                  height="10"
                  size="small"
                  value={formdata.totime}
                  name="totime"
                  // onChange={(newValue) => {
                  //   setTo(newValue.$d.toLocaleString());
                  // }}
                  onChange={handleToTimeChange}
                  renderInput={(params) => (
                    <TextField {...params} size="small" />
                  )}
                />
              </LocalizationProvider>
            </Box>
            <Box>
              <FormControl sx={{ width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Guests</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={formdata.guests}
                  name="guests"
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {userData.map((el) => (
                    <MenuItem key={el._id} value={el._id}>
                      {el.firstName} {el.lastName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                value={formdata.description}
                name="description"
                multiline
                onChange={handleTextChange}
                sx={{ width: 300 }}
                rows={3}
              />
            </Box>
            <Button variant="contained" onClick={handleClick}>
              Create
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
