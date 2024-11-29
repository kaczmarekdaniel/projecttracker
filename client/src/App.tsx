import "./App.css";
import PrimaryNav from "./components/PrimaryNav";
import { Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import Notes from "./modules/Notes/Notes";

function App() {
    return (
        <div className="w-full h-screen grid grid-cols-12 grid-rows-8">
            {/* <div className="bg-red-300 row-start-3 row-end-5 col-span-1">
                <PrimaryNav />
            </div> */}

            <PrimaryNav />
            <main className="pl-56 row-start-1 row-end-9 col-start-2 col-span-11 rounded-md">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks" element={<p>tasks</p>} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/settings" element={<p>settings</p>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
