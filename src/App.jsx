import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { useEffect } from "react";
import scroll from "./animation/scroll";
import { Error, Home, Register } from "./pages";

export default function App() {
  useEffect(() => {
    scroll();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route index path="/" element={<Home />} />
        <Route index path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
