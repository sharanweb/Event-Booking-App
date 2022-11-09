import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple, lightGreen, orange } from "@mui/material/colors";
import "./card.css";
import { DateChecker } from "../utils/Datechecker";
import { TimeChecker } from "../utils/timeChecker";



export const CardS = ({ el }) => {
  let date = el.date;
  let x = new Date();
  let y = x.toLocaleDateString();
  const meet = Date.parse(date);
  const today = Date.parse(y);
  

  
  let fromtime = el.fromtime;
  let totime = el.totime;
  let now = new Date();
  let tn = now.toLocaleTimeString();
  const tnarr = tn.split(":"); // splitting the string by colon
  const nowsec = tnarr[0] * 3600 + tnarr[1] * 60 + +tnarr[2]; // converting
  //console.log("nowsec", nowsec);

  

  let dt = el.date.split(",");
  let ft = el.fromtime.split(",")[1].split(":");
  let ftt = ft.join(":");
  const frarr = ftt.split(":"); // splitting the string by colon
  const fromsec = frarr[0] * 3600 + frarr[1] * 60 + +frarr[2]; // converting
  //console.log("fromsec", fromsec);


  let tt = el.totime.split(",")[1].split(":");
  let ttt = tt.join(":");
  const ttarr = ttt.split(":"); // splitting the string by colon
  const tosec = ttarr[0] * 3600 + ttarr[1] * 60 + +ttarr[2]; // converting
  //console.log("ttsec", tosec);

  console.log(DateChecker(today, meet, fromsec, tosec, nowsec));
  // if(DateChecker(today, meet)=== "today"){
  //  // console.log(TimeChecker(fromsec, tosec, nowsec))
  // }

  return (
    <div className="containerbox">
      <h2 className="meetname">{el.name}</h2>
      <p className="meethost">
        Host: {el.host.firstName} {el.host.lastName}
      </p>
      <div className="meetflex">
        <p className="meetdate">{dt[0]}</p>
        <p className="meettime">
          {ft[0]}:{ft[1]} to {tt[0]}:{tt[1]}
        </p>
      </div>
      <p className="guests">
        Guests: {el.guests[0].firstName} + {el.guests.length - 1}
      </p>
      <Button variant="contained" size="small">
        Know More
      </Button>
      {
        DateChecker(today, meet, fromsec, tosec, nowsec) == "upcoming" ? <Avatar sx={{ bgcolor: orange[600] }} className="statusmeet">
        UP
      </Avatar> : DateChecker(today, meet, fromsec, tosec, nowsec) == "completed" ? <Avatar sx={{ bgcolor: deepOrange[500] }} className="statusmeet">
        CP
      </Avatar>: DateChecker(today, meet, fromsec, tosec, nowsec) == "ongoing" ? <Avatar sx={{ bgcolor: lightGreen[700] }} className="statusmeet">
        ON
      </Avatar>: null
      }
      
    </div>
  );
};
