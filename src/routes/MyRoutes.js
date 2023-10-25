import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-Todo/AddToDo";
import ViewPage from "../pages/viewPage/ViewPage";

import Login from "../pages/loginPage/Login";
import Notfound from "../pages/notfound/Notfound";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/add" element={<AddToDo />} />

        <Route path="/view/:id" element={<ViewPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default MyRoutes;
