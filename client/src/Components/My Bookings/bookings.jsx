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
import Switch from '@mui/material/Switch';
import { Audio } from "react-loader-spinner";

export const Meetings = () => {
  const [dataa, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [checked, setChecked] = React.useState(false);
  const { detail, setDetail, loggedin, setLoggedin } = useContext(AuthContext);
  console.log(loggedin);
  const navigate = useNavigate();

  let hostid;
  const newhost = JSON.parse(localStorage.getItem("username"));
  if (newhost != null) {
    hostid = JSON.parse(localStorage.getItem("username")).user._id;
  }

  const handleChange = () => {
    console.log("from selct tag", checked);
    if (checked == true) {
      console.log("lets get in")
      axios
        .get(`https://book2meet.herokuapp.com/event/host/${hostid}`)
        .then((res) => {
          setData(res.data.eventbyid);
          //console.log("selected", res.data)
        });
    }if(checked == false){
      axios
      .get("https://book2meet.herokuapp.com/event")
      .then((res) => {
        setData(res.data.getallevent);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    }
    
  };

  useEffect(()=>{
    handleChange();
  }, [checked])

  const getData = () => {
    axios
      .get("https://book2meet.herokuapp.com/event")
      .then((res) => {
        setData(res.data.getallevent);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  //console.log(dataa);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mybookback">
      {loading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle={{}}
          wrapperClass
        />
      ) : newhost !== null ? (
        <div className="meet_body">
          <div className="meeting_select">
            <Box>
              <h2 className="meet_title">All Meetings</h2>
            </Box>
            <Box sx={{ width: 180, mt: 2, mb: 1, display:"flex", justifyContent:"space-between"}}>
              <Switch
                value={checked}
                onChange={()=>setChecked(!checked)}
                inputProps={{ "aria-label": "controlled" }}
                sx={{mt:0.3}}
              />
              <Typography sx={{mt:1, mr:1}}>Hosted By You</Typography>
            </Box>
          </div>
          <div className="card_container">
            {dataa.map((el) => (
              <CardS key={el._id} el={el}></CardS>
            ))}
          </div>
        </div>
      ) : (
        navigate("/signin")
      )}
    </div>
  );
};
