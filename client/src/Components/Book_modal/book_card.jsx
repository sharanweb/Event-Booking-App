import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { flexbox } from "@mui/system";
import "@fontsource/roboto/700.css";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";

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
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              width: 500,
              height: 900,
              display: "flex",
              flexDirection: "column",
              border: 1,
              borderColor: "grey.500",
              borderRadius: "16px",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "text.disabled",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <h1>Create Event</h1>
            <Box
              component="form"
              noValidate
              sx={{ mt: 3, border: 1, borderColor: "grey.500" }}
            >
              <TextField
                id="outlined-basic"
                label="Event name"
                variant="outlined"
              ></TextField>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
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
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="To"
                    value={to}
                    onChange={(newValue) => {
                      setTo(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <Box>
                <Autocomplete
                  id="grouped-demo"
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
                  rows={4}
                  defaultValue="Default Value"
                />
              </Box>
              <Button variant="contained">Contained</Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
