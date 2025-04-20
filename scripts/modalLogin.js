document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("passwordModal");
  const closeModal = document.querySelector(".modal .close");
  const openModalLink = document.getElementById("forgotPasswordLink");
  const sendCodeBtn = document.getElementById("sendCodeBtn");
  const confirmationMessage = document.getElementById("confirmationMessage");

  // ✅ Abrir el modal
  openModalLink.addEventListener("click", () => {
    modal.style.display = "block";
    confirmationMessage.style.display = "none";
  });

  // ✅ Cerrar modal con la X
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // ✅ Cerrar modal al hacer clic fuera
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // ✅ Simular envío
  sendCodeBtn.addEventListener("click", () => {
    const email = document.getElementById("recoveryEmail").value;
    if (email.trim() === "") {
      alert("Por favor, ingresa un correo válido.");
      return;
    }
    confirmationMessage.style.display = "block";
  });
});
