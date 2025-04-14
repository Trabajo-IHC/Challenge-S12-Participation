const modal = document.getElementById("myModal");
const termsModal = document.getElementById("termsModal");
const privacyModal = document.getElementById("privacyModal");
const btn = document.getElementById("myBtn");
const aboutUsFooter = document.getElementById("aboutUsFooter");
const privacyLink = document.getElementById("privacyLink");
const termsLink = document.getElementById("termsLink");
const span = document.getElementsByClassName("close");

// Abre el modal de "Sobre Nosotros"
btn.onclick = () => modal.style.display = "block";
aboutUsFooter.onclick = () => modal.style.display = "block";

// Abre el modal de "Términos y Condiciones"
termsLink.onclick = (event) => {
  event.preventDefault();
  termsModal.style.display = "block";
};

// Abre el modal de "Política de Privacidad"
privacyLink.onclick = (event) => {
  event.preventDefault();
  privacyModal.style.display = "block";
};

// Cerrar modales
for (let closeSpan of span) {
  closeSpan.onclick = () => {
    modal.style.display = "none";
    termsModal.style.display = "none";
    privacyModal.style.display = "none";
  };
}

// Cerrar modal al hacer clic fuera de él
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  } else if (event.target === termsModal) {
    termsModal.style.display = "none";
  } else if (event.target === privacyModal) {
    privacyModal.style.display = "none";
  }
}
