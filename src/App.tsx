import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>

        {/* This is the default route which is indexed on page load */}
        <Route index element={"Index Route"} />

        {/* This is the route for an invalid route e.g.: 404 Route */}
        <Route path="*" element={"Invalid Route"} />

      </Routes>
    </>
  );
}