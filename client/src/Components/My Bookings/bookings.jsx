import { Selects } from "../multiple_select/select";
import { Box } from "@mui/system";

export const Meetings = () => {
  return (
    <div>
      <h1>Meetings</h1>
      <Selects></Selects>
      <Box
        sx={{
          border: 1,
          borderColor: "grey.500",
          borderRadius: "9px",
          width: "300px",
          height: "100px",
          boxShadow: "3",
        }}
      ></Box>
    </div>
  );
};
