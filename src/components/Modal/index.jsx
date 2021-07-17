import React, { useState,  } from 'react'
import './styles.css'

export default function Modal({ textModal }) {
  const [open, setOpen] = useState(false)
  
  // function handleShowModal() {
  //   if (open === false) {
  //     const elementModal = document.getElementById("myModal");
  //     elementModal.style.display = "block"
  //     setOpen(true);
  //   }

  // }
  function handleCloseModal(open) {
    const elementModal = document.getElementById("myModal");
    elementModal.style.display = "none";
    setOpen(false)
    window.location.reload()
  }

  return (

    <>
      <div id="myModal" class="modal">
      

        <div class="modal-content">
          <div><span onClick={handleCloseModal} class="close">&times;</span></div>
          <p>{textModal}</p>
        </div>

      </div>
    </>
  )

}


