import React from 'react';
import { Routes, Route } from "react-router-dom";
import AddNewStudent from '../pages/AddNewStudent';
import Contact from '../pages/ContactUs';
import EditDetails from '../pages/EditDetails';
import Home from '../pages/Home';
import Students from '../pages/Students';

const RoutesComp = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Students" element={<Students />} />
                <Route path="ContactUs" element={<Contact />} />
                <Route path="Students/AddNewStudent" element={<AddNewStudent />} />
                <Route path="Students/EditDetails" element={<EditDetails />} />
            </Routes>
        </div>
    );
}

export default RoutesComp;