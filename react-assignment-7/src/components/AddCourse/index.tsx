import { Box, Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import useFetch from "../../hooks/useFetch";

const AddCourse: FC = () => {
  const url = "http://localhost:8080/course";
  const [fetch, response, error] = useFetch();

  const [name, setName] = useState<string>();
  const [code, setCode] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "code") {
      setCode(e.target.value);
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    if (name && code) {
      fetch(url, { url, method: "post", data: { name, code } });
    }
  };

  return (
    <section>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          name="name"
          label="Name"
          variant="outlined"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          name="code"
          label="Code"
          variant="outlined"
        />
      </Box>
      <Button
        onClick={onSubmit}
        size="large"
        sx={{ marginTop: "10px" }}
        variant="outlined">
        Submit
      </Button>
    </section>
  );
};

export default AddCourse;
