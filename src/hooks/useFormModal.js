import { useState } from "react";


export const useFormModal = () => {
    const [modal, setModal] = useState(false)
    const [toggleForm, setToggleForm] = useState(true);

    const handleModal = () => {
      setModal(!modal)
      console.log(modal)
    }

    const handleToggle = () => {
      setToggleForm(!toggleForm)
    }


    return {
        modal,
        toggleForm,
        handleModal,
        handleToggle
    }

}