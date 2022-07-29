import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Inbox from "./Pages/Inbox";
import Login from "./Pages/Login";
import UpdateProfile from "./Pages/UpdateProfile";
import RequireAuth from "./RequiredRoute/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>}>
          <Route path="inbox/:email" element={<Inbox />} />
        </Route>
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
