import "./App.css";
import PrimaryNav from "./components/PrimaryNav";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Notes from "./screens/Notes/Notes";
import Tasks from "./screens/Tasks/Tasks";
import { useCallback, useEffect } from "react";
import { InteractionHandler } from "./hooks/InteractionHandler/InteractionHandler";

function App() {

   const {test} =  InteractionHandler();

    
    return (
        <div className="w-full h-screen ">
            {/* <div className="bg-red-300 row-start-3 row-end-5 col-span-1">
                <PrimaryNav />
            </div> */}

            <PrimaryNav />
            <div className="pl-56">
                <main className=" row-start-1 row-end-9 col-start-2 col-span-11 rounded-md">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/notes" element={<Notes />} />
                        <Route path="/settings" element={<p>settings</p>} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
