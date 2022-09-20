import { FC } from "react";
import AddCourse from "../../components/AddCourse";
import CourseList from "../../components/CourseList";
import DeleteCourse from "../../components/DeleteCourse";
import TabsPanel from "../../components/Tabs";
import UpdateCourse from "../../components/UpdateCourse";

const Course: FC = () => {
  const labels: { label: string; component: FC }[] = [
    { label: "List Courses", component: CourseList },
    { label: "Add Course", component: AddCourse },
    { label: "Update Course", component: UpdateCourse },
    { label: "Delete Course", component: DeleteCourse },
  ];
  return (
    <section>
      <h1> Courses </h1>
      <TabsPanel labels={labels} />
    </section>
  );
};

export default Course;
