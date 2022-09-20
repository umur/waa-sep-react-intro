import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Course from "./pages/Course";
import HomePage from "./pages/Home";
import Student from "./pages/Student";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/course" element={<Course />}></Route>
            <Route path="/student" element={<Student />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
