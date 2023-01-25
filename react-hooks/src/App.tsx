import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { UseCallback } from "./pages/useCallback/UseCallback";
import { UseContext } from "./pages/useContext/UseContext";
import { UseDebugValue } from "./pages/useDebugValue/UseDebugValue";
import { UseDeferredValue } from "./pages/useDeferredValue/UseDeferredValue";
import { UseEffect } from "./pages/useEffect/UseEffect";
import { UseId } from "./pages/useId/UseId";
import { UseImperativeHandle } from "./pages/useImperativeHandle/UseImperativeHandle";
import { UseLayoutEffect } from "./pages/UseLayoutEffect/UseLayoutEffect";
import { UseMemo } from "./pages/useMemo/UseMemo";
import { UseReducer } from "./pages/useReducer/UseReducer";
import { UseRef } from "./pages/useRef/UseRef";
import { UseState } from "./pages/useState/UseState";
import { UseTransition } from "./pages/useTransition/UseTransition";

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
        <Route path="useCallback" element={<UseCallback />} />
        <Route path="useTransition" element={<UseTransition />} />
        <Route path="useCallback" element={<UseCallback />} />
        <Route path="useDefferedValue" element={<UseDeferredValue />} />
        <Route path="useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="useDebugValue" element={<UseDebugValue />} />
        <Route path="useImperativeHandle" element={<UseImperativeHandle />} />
        <Route path="useId" element={<UseId />} />
      </Routes>
    </Container>
  );
}

export default App;
