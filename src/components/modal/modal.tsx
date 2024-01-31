import React from "react";
import "./modal.css";

interface ModalType {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalType> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
