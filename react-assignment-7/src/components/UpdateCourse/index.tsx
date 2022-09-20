import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

const UpdateCourse: FC = () => {
  return (
    <section>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <TextField id="outlined-basic" label="Course ID" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="New Course Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="New Course Code"
          variant="outlined"
        />
      </Box>
      <Button size="large" sx={{ marginTop: "10px" }} variant="outlined">
        Submit
      </Button>
    </section>
  );
};

export default UpdateCourse;
