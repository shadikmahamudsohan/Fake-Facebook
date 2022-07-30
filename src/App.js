import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Inbox from "./Pages/Inbox";
import Login from "./Pages/Login";
import UpdateProfile from "./Pages/UpdateProfile";
import RequireAuth from "./RequiredRoute/RequireAuth";
import ImageShare from "./Pages/ImageShare";

//css global file
import './CSS/AddButton.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>}>
          <Route path="inbox/:email" element={<Inbox />} />
          <Route path="imageShare" element={<ImageShare />} />
          <Route path="updateProfile" element={<UpdateProfile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
