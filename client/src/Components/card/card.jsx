import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import "./card.css";

export const CardS = ({el}) => {
  return (
    <div className="containerbox">
      <h2 className="meetname">{el.name}</h2>
      <p className="meethost">Host: {el.host.firstName} {el.host.lastName}</p>
      <div className="meetflex">
        <p className="meetdate">{el.date}</p>
        <p className="meettime">{el.fromtime} to {el.totime}</p>
      </div>
      <p className="guests">Guests: {el.guests[0].firstName} + {el.guests.length-1}</p>
      <Button variant="contained" size="small">
        Know More
      </Button>
      <Avatar sx={{ bgcolor: deepOrange[500] }} className="statusmeet">
        UP
      </Avatar>
    </div>
  );
};
