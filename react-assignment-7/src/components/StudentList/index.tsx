import { FC, useState, useEffect } from "react";
import { StudentDetailsType } from "./types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useFetch from "../../hooks/useFetch";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "gpa", headerName: "GPA", width: 130 },
  { field: "major", headerName: "Major", width: 130 },
  { field: "coursesTaken", headerName: "Courses Taken", width: 130 },
];

const StudentsList: FC = () => {
  const url = "http://localhost:8080/student";

  const [students, setStudents] = useState<StudentDetailsType[]>([]);
  const [fetch, response, error] = useFetch();

  useEffect(() => {
    fetch(url, { url, method: "get" });
  }, []);

  useEffect(() => {
    if (error) {
      console.error(error);
    } else if (response) {
      const normalizedStudents = response.data.map((student: unknown) => {
        // @ts-ignore
        const coursesNames = student.coursesTaken.map(
          // @ts-ignore
          (course: unknown) => course.name
        );
        // @ts-ignore
        return { ...student, coursesTaken: coursesNames };
      });
      setStudents(normalizedStudents);
    }
  }, [response?.data]);

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={students}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default StudentsList;
