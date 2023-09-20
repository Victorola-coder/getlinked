import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<div>Home</div>} />
        <Route path="*" element={<div>Not FOund</div>} />
      </Routes>
    </>
  );
}
