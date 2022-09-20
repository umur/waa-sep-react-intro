import { FC } from "react";
import { StudentDetailsType } from "./types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
  const courses: StudentDetailsType[] = [
    {
      id: "111",
      firstName: "John",
      lastName: "Doe",
      email: "xyz@gmail.com",
      gpa: 3.4,
      major: "Compro",
      coursesTaken: ["FPP, MPP"],
    },
    {
      id: "112",
      firstName: "Jane",
      lastName: "Dpe",
      email: "xyz1@gmail.com",
      gpa: 3.46,
      major: "Compro",
      coursesTaken: ["FPP, MPP", "WAP"],
    },
  ];
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

export default StudentsList;
