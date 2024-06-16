import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <>
      <main className="bg-debug-1 min-h-full w-full">
        <Navbar />
        <Routes>

          {/* This is the default route which is indexed on page load */}
          <Route path="/" element={<Landing />} />

          {/* This is the route for an invalid route e.g.: 404 Route */}
          <Route path="*" element={"Invalid Route"} />

        </Routes>
      </main>
    </>
  );
<<<<<<< HEAD
}
=======
}

>>>>>>> 53ec191134f538f86791a1f511930ac8a7390efd
