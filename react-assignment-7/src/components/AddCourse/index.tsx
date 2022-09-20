import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";

const AddCourse: FC = () => {
  return (
    <section>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Code" variant="outlined" />
      </Box>
      <Button size="large" sx={{ marginTop: "10px" }} variant="outlined">
        Submit
      </Button>
    </section>
  );
};

export default AddCourse;
