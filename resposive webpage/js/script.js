//navigation for media
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
//////////////
//search btn
let searchbox = document.getElementById("searchbox");
let searchbtn = document.getElementById("searchbtn");
let search_submit_btn = document.getElementById("search-submit-btn");
searchbtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (searchbox.style.display === "none") {
    searchbox.style.display = "flex";
  } else {
    searchbox.style.display = "none";
  }
  search_submit_btn.addEventListener("click", () => {
    searchbox.style.display = "none";
  });
});
////////////////////////
//movie--play--btn--create
let btndiv = document.querySelectorAll(".btn--replace");

btndiv.forEach((btn) => {
  let moviebtn = document.createElement("button");
  moviebtn.setAttribute("class", "movie-view-btn");
  moviebtn.innerText = "play";
  btn.replaceWith(moviebtn);
});

/////////////////////
// exapmle page works

const mainhead = document.getElementById("mainhead");
const replacehead = document.getElementById("replacehead");
console.log(mainhead, replacehead);
replacehead.replaceWith(mainhead);
console.log("hais");
