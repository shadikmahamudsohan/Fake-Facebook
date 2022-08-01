import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Inbox from "./Pages/Inbox";
import Login from "./Pages/Login";
import UpdateProfile from "./Pages/UpdateProfile";
import RequireAuth from "./RequiredRoute/RequireAuth";
import ImageShare from "./Pages/ImageShare";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//css global file
import './CSS/AddButton.css';
import ShareVideo from "./Pages/ShareVideo";
import Documents from "./Pages/Documents";
import CreateDocuments from "./Pages/CreateDocuments";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>}>
          <Route path="inbox/:email" element={<Inbox />} />
          <Route path="imageShare" element={<ImageShare />} />
          <Route path="updateProfile" element={<UpdateProfile />} />
          <Route path="shareVideo" element={<ShareVideo />} />
          <Route path="document" element={<Documents />} />
          <Route path="create-document" element={<CreateDocuments />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
