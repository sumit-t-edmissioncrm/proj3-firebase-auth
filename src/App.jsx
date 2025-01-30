import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AuthPage from "./pages/auth-page/AuthPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />

        <Route
          path="/profile"
          element={
            <AuthPage>
              <Profile />
            </AuthPage>
          }
        />
      </Routes>
    </>
  );
}

export default App;
