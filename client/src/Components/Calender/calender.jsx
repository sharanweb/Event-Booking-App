import Calendar from "react-calendar";
import { useContext, useState } from "react";
import 'react-calendar/dist/Calendar.css';
import {useNavigate} from "react-router-dom";
import { DateContext } from "../Context/date.context";

export const Calender = () => {
  const [value, onChange] = useState(new Date());
  const {cdate, setCdate} = useContext(DateContext)
  const naviagte = useNavigate();
  //console.log(value);
  //console.log(Date());
  let hostid;
  const newhost = JSON.parse(localStorage.getItem("username"));
  if(newhost != null){
    hostid = JSON.parse(localStorage.getItem("username"));
  }
  console.log("hostnamecalender",hostid)

  const handleDateClick = (e) =>{
    setCdate(e)
    if(newhost !== null){
      naviagte("/book")
    }else{
      naviagte("/signin")
    }
     
  }
  return (
    <>
      <Calendar onClickDay={handleDateClick} value={value} />
    </>
  );
};
