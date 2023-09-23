import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { useEffect } from "react";
import scroll from "./animation/scroll";
import { Contact, Error, Home, Register } from "./pages";

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
        <Route index path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
