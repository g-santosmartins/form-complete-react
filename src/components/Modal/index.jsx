import React, { useState,  } from 'react'
import './styles.css'
import { Button  } from '@material-ui/core'


export default function Modal({ textModal }) {

 
  const [open, setOpen] = useState(false)


  
  function handleShowModal() {
    if (open === false) {
      const elementModal = document.getElementById("myModal");
      elementModal.style.display = "block"
      setOpen(true);
    }

  }
  function handleCloseModal() {
    const elementModal = document.getElementById("myModal");
    elementModal.style.display = "none";
    setOpen(false)
  }

  return (

    <>
  
      <Button onClick={handleShowModal}>Open Modal</Button>


      <div id="myModal" class="modal">

        <div class="modal-content">
          <span onClick={handleCloseModal} class="close">&times;</span>
          <p>{textModal}</p>

        </div>

      </div>

    </>
  )

}


