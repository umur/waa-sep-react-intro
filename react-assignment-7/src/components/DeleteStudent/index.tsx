import { FC, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import useFetch from "../../hooks/useFetch";

const DeleteStudent: FC = () => {
  const url = "http://localhost:8080/student";
  const [fetch, response, error] = useFetch();

  const [id, setId] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "id") {
      setId(e.target.value);
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    if (id) {
      const updateUrl = `${url}/${id}`;
      fetch(updateUrl, {
        url: updateUrl,
        method: "delete",
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
          name="id"
          onChange={handleChange}
          id="outlined-basic"
          label="Stundent ID"
          variant="outlined"
        />
      </Box>
      <Button
        onClick={onSubmit}
        color="error"
        size="large"
        sx={{ marginTop: "10px" }}
        variant="outlined">
        Submit
      </Button>
    </section>
  );
};

export default DeleteStudent;
