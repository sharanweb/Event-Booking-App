import { Routes, Route } from "react-router-dom";
import {SignUp} from "../Components/Auth/signup";
import {SignIn} from "../Components/Auth/login"
import { BookModal } from "../Components/Book_modal/book_card";
import {Calender} from "../Components/Calender/calender"
import { Home } from "../Components/Home/Home";
import { Meetings } from "../Components/My Bookings/bookings";

export const Allroutes = ()=>{
    return (
        <>
           <Routes>
              <Route path="/" element={<Home></Home>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/signIn" element={<SignIn></SignIn>}></Route>
                <Route path="/book" element={<BookModal></BookModal>}></Route>
                <Route path="/calender" element = {<Calender></Calender>}></Route>
                <Route path="/meetings" element={<Meetings></Meetings>}></Route>
            </Routes>

        </>
    )
}