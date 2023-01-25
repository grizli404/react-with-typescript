import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <Nav variant="pills">
      <ul className="list-group w-100">
        <li className="list-group-item">
          <Nav.Link to="/" as={NavLink}>
            <p>Home</p>
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useState" as={NavLink}>
            UseState
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useEffect" as={NavLink}>
            UseEffect
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useContext" as={NavLink}>
            UseContext
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useRef" as={NavLink}>
            UseRef
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useMemo" as={NavLink}>
            UseMemo
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useCallback" as={NavLink}>
            UseCallback
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useReducer" as={NavLink}>
            UseReducer
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useTransition" as={NavLink}>
            UseTransition
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useDefferedValue" as={NavLink}>
            UseDefferedValue
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useLayoutEffect" as={NavLink}>
            UseLayoutEffect
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useDebugValue" as={NavLink}>
            UseDebugValue
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useImperativeHandle" as={NavLink}>
            UseImperativeHandle
          </Nav.Link>
        </li>
        <li className="list-group-item">
          <Nav.Link to="/useId" as={NavLink}>
            UseId
          </Nav.Link>
        </li>
      </ul>
    </Nav>
  );
}
