import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import UserProfile from "./pages/UserProfile";
import AdminRoute from "./components/AdminRoute";
import AdminContainer from "./components/admin/AdminContainer";
import AdminUsers from "./pages/admin-pages/AdminUsers";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<UserProfile />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminContainer />}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<div>Dashboard</div>} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="posts" element={<div>posts</div>} />
          </Route>
        </Route>

        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
