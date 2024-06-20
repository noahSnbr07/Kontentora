import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Pricing from "./pages/pricing";
import Notfound from "./pages/notfound";
export default function App() {
  return (
    <>
      <main className="min-h-full w-full">
        <Navbar />
        <Routes>

          {/* This is the default route which is indexed on page load */}
          <Route path="/" element={<Landing />} />

          {/* This is the route for an invalid route e.g.: 404 Route */}
          <Route path="*" element={<Notfound/>} />

          <Route path="/pricing" element={<Pricing/>} />

        </Routes>
      </main>
    </>
  );
}