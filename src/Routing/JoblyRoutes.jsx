import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Companies from "../Components/Companies/Companies";
import Jobs from "../Components/Jobs/Jobs";
import LoginForm from "../Components/Auth/LoginForm";
import SignupForm from "../Components/Auth/SignupForm";
import ProfileForm from "../Components/Auth/ProfileForm";
import CompanyDetail from "../Components/Companies/CompanyDetail";
import UserContext from "../Components/Auth/UserContext";
import ProtectedRoute from "./ProtectedRoute";

function JoblyRoutes( { signup, login } ) {

    const { currentUser } = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup}/>} />

            <Route
                path='/companies'
                element={
                    <ProtectedRoute isAllowed={!!currentUser} redirectTo='/login'>
                    <Companies />
                    </ProtectedRoute>
                        }
            />

            <Route
                path='/companies/:handle'
                element={
                    <ProtectedRoute isAllowed={!!currentUser} redirectTo='/login'>
                    <CompanyDetail />
                    </ProtectedRoute>
                        }
            />

            <Route
                path='/jobs'
                element={
                    <ProtectedRoute isAllowed={!!currentUser} redirectTo='/login'>
                    <Jobs />
                    </ProtectedRoute>
                        }
            />

            <Route
                path='/profile'
                element={
                    <ProtectedRoute isAllowed={!!currentUser} redirectTo='/login'>
                    <ProfileForm />
                    </ProtectedRoute>
                        }
            />

        </Routes>
    )
}

export default JoblyRoutes;