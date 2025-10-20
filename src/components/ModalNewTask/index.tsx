import { useCreateTaskMutation } from '@/state/api';
import React from 'react'

type Props = {
    isOpen: boolean;
    onClose: () => void;
};


const ModalNewTask = ({isOpen, onClose}: Props) => {
    const [ createTask ] = useCreateTaskMutation();
  return (
    <div>ModalNewTask</div>
  )
}

export default ModalNewTask