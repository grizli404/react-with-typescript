import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { UseCallback } from "./pages/useCallback/UseCallback";
import { UseContext } from "./pages/useContext/UseContext";
import { UseEffect } from "./pages/useEffect/UseEffect";
import { UseMemo } from "./pages/useMemo/UseMemo";
import { UseReducer } from "./pages/useReducer/UseReducer";
import { UseRef } from "./pages/useRef/UseRef";
import { UseState } from "./pages/useState/UseState";

function App() {
  return (
    <Container className="mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="useState" element={<UseState />} />
        <Route path="useEffect" element={<UseEffect />} />
        <Route path="useContext" element={<UseContext />} />
        <Route path="useEffect" element={<UseEffect />} />
        <Route path="useRef" element={<UseRef />} />
        <Route path="useMemo" element={<UseMemo />} />
        <Route path="useCallback" element={<UseCallback />} />
        <Route path="useReducer" element={<UseReducer />} />
      </Routes>
    </Container>
  );
}

export default App;
