import { Dialog } from "@headlessui/react";
import { useRef } from 'react';

export function Modal({ onClose = () => {}, children }) {
  const overlayRef = useRef();

  return (
    <Dialog
      className="fixed inset-0 z-10 flex items-center justify-center"
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
    >
      <Dialog.Overlay
        className="fixed inset-0 bg-grey-800/60"
        ref={overlayRef}
      >
        <div className="relative flex items-center justify-center">
          { children }
        </div>
      </Dialog.Overlay>
    </Dialog>
  )
}