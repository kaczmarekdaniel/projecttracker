import PrimaryNav from "./components/PrimaryNav";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Notes from "./screens/Notes/Notes";
import Tasks from "./screens/Tasks/Tasks";
import { InteractionHandler } from "./hooks/InteractionHandler/InteractionHandler";

function App() {

  const { registerShortcut } = InteractionHandler();


  return (

  <>
    <PrimaryNav />
    <main className=" rounded-md ml-56">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<p>settings</p>} />
      </Routes>
    </main>
  </>
)

}

export default App;
