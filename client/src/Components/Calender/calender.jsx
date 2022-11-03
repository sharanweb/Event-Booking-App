import Calendar from "react-calendar";
import { useState } from "react";

export const Calender = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  console.log(Date());
  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  );
};
