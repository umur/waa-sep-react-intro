import { FC } from "react";
import TabsPanel from "../../components/Tabs";

const Student: FC = () => {
  const labels: { label: string; component: FC }[] = [
    { label: "List Courses", component: Student },
    { label: "Add Course", component: Student },
    { label: "Update Course", component: Student },
    { label: "Delete Course", component: Student },
  ];

  return (
    <section>
      <h1>Student</h1>
      <TabsPanel labels={labels} />
    </section>
  );
};

export default Student;
