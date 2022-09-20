import { Button } from "@mui/material";
import { FC } from "react";
import Header from "../../components/Header";
import TabsPanel from "../../components/Tabs";

const Course: FC = () => {
  const labels: { label: string; component: FC }[] = [
    { label: "List Courses", component: Header },
    { label: "Add Course", component: Button },
    { label: "Update Course", component: Button },
    { label: "Delete Course", component: Button },
  ];
  return (
    <section>
      <h1> Courses </h1>
      <TabsPanel labels={labels} />
    </section>
  );
};

export default Course;
