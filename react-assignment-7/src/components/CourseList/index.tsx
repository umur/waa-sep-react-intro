import { FC, useEffect, useState } from "react";
import { CourseDetailsType } from "./types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Course name", width: 130 },
  { field: "code", headerName: "Course code", width: 130 },
];

const CourseList: FC = () => {
  const url = "http://localhost:8080/course";

  const [courses, setCourses] = useState<CourseDetailsType[]>([]);
  const [response, error] = useFetch(url, {
    url: "http://localhost:8080/course",
    method: "get",
  });

  useEffect(() => {
    if (error) {
      console.error(error);
    } else if (response) {
      console.log(response);
      setCourses(response.data);
    }
  }, []);

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={courses}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default CourseList;
