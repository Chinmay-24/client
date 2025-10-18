import { useCreateProjectMutation } from "@/state/api";
import React from "react";

type Props = {
    isOpen: boolean,
    onClose: () => void;

}

const ModalNewProject = ({isOpen, onClose}: Props) => {
    const [createProject, {isLoading}] = useCreateProjectMutation();
    
  return 
    <div>ModalNewProject</div>;

};

export default ModalNewProject