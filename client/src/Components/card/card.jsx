import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import "./card.css";

const DateChecker = (today, meet)=>{
  if(meet > today){
   return "upcoming"
  }
  if(meet<today){
   return "completed"
  }
  if(meet == today){
   return "today"
  }
}

export const CardS = ({ el }) => {
  let date = el.date;
  //console.log("y", date)
  let x  = new Date;
  let y = x.toLocaleDateString();
  const meet = Date.parse(date);
  const today = Date.parse(y);
  console.log(DateChecker(today,meet));

  // console.log("meetingparse",Date.parse(date));
  // console.log("todayparse", Date.parse(y))
  let fromtime  = el.fromtime;
  let totime  = el.totime;
  let dt = el.date.split(",")
  let ft = el.fromtime.split(",")[1].split(":")
  let tt = el.totime.split(",")[1].split(":")
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
      <Avatar sx={{ bgcolor: deepOrange[500] }} className="statusmeet">
        UP
      </Avatar>
    </div>
  );
};



