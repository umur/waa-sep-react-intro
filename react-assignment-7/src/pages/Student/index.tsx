import { FC } from "react";
import AddStudent from "../../components/AddStudent";
import DeleteStudent from "../../components/DeleteStudent";
import StudentsList from "../../components/StudentList";
import TabsPanel from "../../components/Tabs";
import UpdateStudent from "../../components/UpdateStudent";

const Student: FC = () => {
  const labels: { label: string; component: FC }[] = [
    { label: "List Students", component: StudentsList },
    { label: "Add Student", component: AddStudent },
    { label: "Update Student", component: UpdateStudent },
    { label: "Delete Student", component: DeleteStudent },
  ];

  return (
    <section>
      <h1>Student</h1>
      <TabsPanel labels={labels} />
    </section>
  );
};

export default Student;
