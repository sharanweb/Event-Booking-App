import { Selects } from "../multiple_select/select";

import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardS } from "../card/card";
import "./bookings.css";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { height } from "@mui/system";

export const Meetings = () => {
  const [dataa, setData] = useState([]);
  const [age, setAge] = React.useState("");

  let hostid = JSON.parse(localStorage.getItem("username")).user._id;

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const getData = () => {
    axios
      .get("http://localhost:8080/event")
      .then((res) => {
        setData(res.data.getallevent);
      })
      .then((err) => console.log("failed"));
  };
  console.log(dataa);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="meet_body">
      <div className="meeting_select">
        <Box>
          <h2 className="meet_title">All Meetings</h2>
        </Box>
        <Box sx={{ width: 200, mt: 2, mb: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              autoWidth
              size="small"
              width="100"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem>Completed</MenuItem>
              <MenuItem >Upcoming</MenuItem>
              <MenuItem value={hostid}>Hosted by You</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="card_container">
        {dataa.map((el) => (
          <CardS key={el._id} el={el}></CardS>
        ))}
      </div>
    </div>
  );
};
