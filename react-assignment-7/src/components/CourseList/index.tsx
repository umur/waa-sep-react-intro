import { FC } from "react";
import { CourseDetailsType } from "./types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Course name", width: 130 },
  { field: "code", headerName: "Course code", width: 130 },
];

const CourseList: FC = () => {
  const courses: CourseDetailsType[] = [
    { name: "FPP", id: "111", code: "CS404" },
    { name: "MPP", id: "211", code: "CS414" },
    { name: "WAA", id: "311", code: "CS504" },
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

export default CourseList;
