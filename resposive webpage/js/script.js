let navbar = document.getElementById("bar");
let navmenu = document.getElementById("menus");

navbar.addEventListener("click", (event) => {
  event.preventDefault();
  if (navmenu.style.display === "none") {
    navmenu.style.display = "flex";
    navbar.innerHTML = `<span class="material-symbols-outlined">
    close
    </span>`;
  } else {
    navmenu.style.display = "none";
    navbar.innerHTML = `<span class="material-symbols-outlined"> menu </span>`;
  }
});
