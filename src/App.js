import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Inbox from "./Pages/Inbox";
import Login from "./Pages/Login";
import RequireAuth from "./RequiredRoute/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>}>
          <Route path="inbox/:id" element={<Inbox />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
