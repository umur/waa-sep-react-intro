import Login from 'components/route/Login';
import AboutUs from 'components/route/AboutUs';
import Dashboard from 'components/route/Dashboard';
import A from 'components/way/A';
import React, { createContext, createRef, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from 'components/route';
import Course from 'components/course';
import Student from 'components/student';
import CreateCourse from 'components/course/CreateCourse';
import CreateStudent from 'components/student/CreateStudent';

export const LangContext = createContext({ lang: 'EN' });
const valueRef = createRef();

function App() {
  const [langState, setLangState] = useState({ lang: 'EN' })

  const onClicked = () => {
    let data = valueRef.current.value;
    console.log(data);
  }

  useEffect(() => {
    // valueRef.current.focus(); // this will focus input field
  })
  return (
      /* <LangContext.Provider value={langState}>
        <A />

      </LangContext.Provider>

      <input type='text' ref={valueRef} />
      <input type='button' onClick={onClicked} value="Click" /> */

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/dashboard" element={<Dashboard /> } />
        <Route path="/student" element={<Student /> } />
        <Route path="/create-student" element={<CreateStudent /> } />
        <Route path="/course" element={<Course /> } />
        <Route path="/create-course" element={<CreateCourse /> } />
        <Route path="/about-us" element={<AboutUs /> } />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
