import { FC, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import useFetch from "../../hooks/useFetch";

const UpdateCourse: FC = () => {
  const url = "http://localhost:8080/course";
  const [fetch, response, error] = useFetch();

  const [id, setId] = useState<string>();
  const [name, setName] = useState<string>();
  const [code, setCode] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "id") {
      setId(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "code") {
      setCode(e.target.value);
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    if (id && name && code) {
      const updateUrl = `${url}/${id}`;
      fetch(updateUrl, {
        url: updateUrl,
        method: "put",
        data: { name, code },
      });
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
          id="outlined-basic"
          label="Course ID"
          name="id"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="New Course Name"
          name="name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="New Course Code"
          name="code"
          variant="outlined"
          onChange={handleChange}
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

export default UpdateCourse;
