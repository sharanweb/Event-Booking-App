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
import { timeChecker } from "../utils/timeChecker";
import { useContext } from "react";
import { AuthContext } from "../Context/auth.context";
import { useNavigate } from "react-router-dom";

export const Meetings = () => {
  const [dataa, setData] = useState([]);
  const [age, setAge] = React.useState("");
  const {detail, setDetail, loggedin, setLoggedin} = useContext(AuthContext);
  console.log(loggedin);
  const navigate = useNavigate();

  let hostid;
  const newhost = JSON.parse(localStorage.getItem("username"));
  if(newhost != null){
    hostid = JSON.parse(localStorage.getItem("username")).user._id;
  }

  const handleChange = (event) => {
    //console.log("from selct tag",event.target.value);
    if(event.target.value == hostid){
      axios.get(`https://book2meet.herokuapp.com/event/host/${event.target.value}`).then((res)=>{
        setData(res.data.eventbyid)
        //console.log("selected", res.data)
      })
    }
    if(event.target.value == "upcoming"){
      const updata = [...dataa]
      console.log(updata)
      let uparr = [];
      for(let i=0; i<uparr.length; i++){
        if(timeChecker(uparr[i]) === "upcoming"){
          uparr.push(updata[i]);
        }
      }
      console.log("uparr", uparr);
    }
  };
  //console.log(age)

  const getData = () => {
    axios
      .get("https://book2meet.herokuapp.com/event")
      .then((res) => {
        setData(res.data.getallevent);
      })
      .catch((err) => console.log(err));
  };
  //console.log(dataa);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {newhost!== null ? <div className="meet_body">
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
              <MenuItem value={"completed"}>Completed</MenuItem>
              <MenuItem value={"upcoming"}>Upcoming</MenuItem>
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
    </div> : navigate("/signin") }
    
    </>
    
  );
};
