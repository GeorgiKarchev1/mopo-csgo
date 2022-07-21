let navtoggle = document.querySelector(".toggle-menu"),
  mobilenav = document.querySelector(".mobile-nav");

navtoggle.onclick = (event) => {
  mobilenav.classList.toggle("active");
};

document.addEventListener("click", function handleClickOutsideBox(event) {
  if (event.target != document.querySelector(".fa-bars")) {
    if (!mobilenav.contains(event.target)) {
      mobilenav.classList.remove("active")
    }
  }
});
