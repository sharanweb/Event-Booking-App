import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
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
import Autocomplete from "@mui/material/Autocomplete";
import "./book_card.css";
import Link from "@mui/material/Link";
import { blue } from "@mui/material/colors";

const theme = createTheme();

const names = [
  { name: "arun" },
  { name: "barun" },
  { name: "carun" },
  { name: "darun" },
  { name: "earun" },
  { name: "farun" },
  { name: "garun" },
  { name: "harun" },
  { name: "iarun" },
  { name: "jarun" },
  { name: "karun" },
];

export const BookModal = () => {
  const [date, setDate] = React.useState(null);
  const [from, setFrom] = React.useState(null);
  const [to, setTo] = useState(null);
  const [formdata, setFormData] = useState({
    host: "",
    date: "",
    fromtime: "",
    totime: "",
    guests: [],
    desription: "",
  });

  const options = names.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: 300,
                height: 450,
                mt: 2,
                backgroundColor: blue[50],
                padding: 2,
                borderColor: "black",
                boxShadow: 3,
                borderRadius: "16px",
                alignItems: "center",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },
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
                  sx={{ width: 300 }}
                  size="small"
                  fullWidth
                ></TextField>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date"
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          sx={{ width: 300 }}
                        />
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
                      value={from}
                      onChange={(newValue) => {
                        setFrom(newValue);
                      }}
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
                      value={to}
                      onChange={(newValue) => {
                        setTo(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} size="small" />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
                <Box>
                  <Autocomplete
                    id="grouped-demo"
                    size="small"
                    options={options.sort(
                      (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                    )}
                    groupBy={(option) => option.firstLetter}
                    getOptionLabel={(option) => option.name}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Guests" />
                    )}
                  />
                </Box>
                <Box>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    sx={{ width: 300 }}
                    rows={3}
                  />
                </Box>
                <Button variant="contained">Contained</Button>
              </Box>
            </Box>
            <Box></Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
