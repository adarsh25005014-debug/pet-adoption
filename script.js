const form = document.getElementById("adoptionForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for applying! Our team will contact you soon.");
    form.reset();
  });
}
