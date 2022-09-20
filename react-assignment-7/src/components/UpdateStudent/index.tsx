import { Box, Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import useFetch from "../../hooks/useFetch";

const UpdateStudent: FC = () => {
  const url = "http://localhost:8080/student";
  const [fetch, response, error] = useFetch();

  const [id, setId] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [gpa, setGpa] = useState<string>();
  const [major, setMajor] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "id") {
      setId(e.target.value);
    } else if (e.target.name === "fName") {
      setFirstName(e.target.value);
    } else if (e.target.name === "lName") {
      setLastName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "gpa") {
      setGpa(e.target.value);
    } else if (e.target.name === "major") {
      setMajor(e.target.value);
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    const updateUrl = `${url}/${id}`;
    if (firstName && lastName && email && gpa && major) {
      fetch(updateUrl, {
        url: updateUrl,
        method: "put",
        data: { firstName, lastName, email, gpa, major, coursesTaken: [] },
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
          onChange={handleChange}
          id="outlined-basic"
          label="Student Id"
          name="id"
          variant="outlined"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="First Name"
          name="fName"
          variant="outlined"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Last Name"
          name="lName"
          variant="outlined"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="GPA"
          name="gpa"
          variant="outlined"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Major"
          name="major"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Courses Taken"
          name="courses"
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

export default UpdateStudent;
