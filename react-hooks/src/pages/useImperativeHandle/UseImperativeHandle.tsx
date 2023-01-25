import { MutableRefObject, useRef, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

export function UseImperativeHandle() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<any>(null);

  return (
    <>
      <br />
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current?.focusCloseBtn()}>
        Focus Close
      </button>
      <button onClick={() => modalRef.current?.focusConfirmBtn()}>
        Focus Confirm
      </button>
      <button onClick={() => modalRef.current?.focusDenyBtn()}>
        Focus Deny
      </button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
