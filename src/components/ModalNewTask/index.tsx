import { useCreateTaskMutation } from '@/state/api';
import React from 'react'

type Props = {
    isOpen: boolean;
    onClose: () => void;
};


const ModalNewTask = ({isOpen, onClose}: Props) => {
    const [ createTask ] = useCreateTaskMutation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
  return (
    <div>ModalNewTask</div>
  )
}

export default ModalNewTask