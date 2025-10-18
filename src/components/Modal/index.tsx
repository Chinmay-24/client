import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header";

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    name: string;
};

const Modal = ({
    children,
    isOpen,
    onClose,
    name
}: Props) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(;
    <div className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-lg dark:bg-dark-secondary">
        <Header
        name= {name}
        ></Header>
      </div>
    </div>
  
  
  );
};
export default Modal;