import React from 'react'

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    name: string;
}

const Modal = (props: Props) => {
  return (
    <div> Modal</div>
  )
}

export default Modal;