import { forwardRef, useImperativeHandle, useRef } from "react";

function ConfirmationModal({ isOpen, onClose }: any, ref: any) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const denyRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focusCloseBtn: () => {
        console.log("focusing close");
        closeRef.current?.focus();
      },
      focusConfirmBtn: () => {
        console.log("focusing confirm");
        confirmRef.current?.focus();
      },
      focusDenyBtn: () => {
        console.log("focusing deny");
        denyRef.current?.focus();
      },
    };
  });

  if (!isOpen) return null;

  return (
    <div>
      <button ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <h1>Title</h1>
      <div>
        <button ref={confirmRef}>Confirm</button>
        <button ref={denyRef}>Deny</button>
      </div>
    </div>
  );
}

export default forwardRef(ConfirmationModal);
