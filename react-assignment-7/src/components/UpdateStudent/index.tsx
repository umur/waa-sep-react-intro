import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

const UpdateStudent: FC = () => {
  return (
    <section>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <TextField id="outlined-basic" label="Student ID" variant="outlined" />
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="GPA" variant="outlined" />
        <TextField id="outlined-basic" label="Major" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Courses Taken"
          variant="outlined"
        />
      </Box>
      <Button size="large" sx={{ marginTop: "10px" }} variant="outlined">
        Submit
      </Button>
    </section>
  );
};

export default UpdateStudent;
