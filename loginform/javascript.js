let tologin = document.getElementById("tologin");
let tocreate = document.getElementById("tocreate");
let createformEl = document.getElementsByClassName("createacc");
let loginformEl = document.getElementsByClassName("login");
let eye = document.querySelectorAll(".eye");
let indicater = document.getElementById("info");
let greentick = document.getElementById("greentick");
let redtick = document.getElementById("redtick");
//////////////////eyechange///////////
////////page change////////////////////////
tologin.addEventListener("click", (e) => {
  e.preventDefault();
  createformEl[0].style.display = "none";
  loginformEl[0].style.display = "block";
});
tocreate.addEventListener("click", (e) => {
  e.preventDefault();
  createformEl[0].style.display = "block";
  loginformEl[0].style.display = "none";
});

/////page swap finished//////////////////////////

/////////form falidation//////////////////
const createForm = document.forms.createform;
const loginform = document.forms.loginform;
const { firstname, lastname, email, newpassword, conformpassword } = createForm;
const { loginemail, loginpassword } = loginform;
////////////eye ball/////////////
eye.forEach((eyenum) => {
  return eyenum.addEventListener("click", () => {
    eyenum.innerText = "  visibility_off";
    newpassword.setAttribute("type", "text");
    conformpassword.setAttribute("type", "text");
    loginpassword.setAttribute("type", "text");
  });
});
/////////////eye ball end/////////////////
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let getdata = localStorage.getItem("formdata");
  const datainobj = JSON.parse(getdata);
  if (newpassword.value !== conformpassword.value) {
    indicater.innerText = "password incorrect!";
    conformpassword.style.border = "white 2px solid";
    newpassword.style.border = "white 2px solid";
    newpassword.style.backgroundColor = "red";
    conformpassword.style.backgroundColor = "red";
    eye[0].style.color = "white";
    eye[1].style.color = "white";
  } else if (datainobj.mail === email.value) {
    indicater.innerText = "Email already exist";
  } else {
    indicater.innerText = "";
    conformpassword.style.border = "";
    newpassword.style.border = "";
    newpassword.style.backgroundColor = "";
    conformpassword.style.backgroundColor = "";
    eye[0].style.color = "";
    eye[1].style.color = "";

    const formdata = {
      first: firstname.value,
      last: lastname.value,
      mail: email.value,
      password: newpassword.value,
      conpassword: newpassword.value,
    };
    const datatojason = JSON.stringify(formdata);
    localStorage.setItem("formdata", datatojason);

    createformEl[0].style.display = "none";
    greentick.style.display = "block";
    setInterval(() => {
      greentick.style.display = "none";
      loginformEl[0].style.display = "block";
    }, 2000);
  }
});

///login  form/////////
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  let getdata = localStorage.getItem("formdata");
  const datainobj = JSON.parse(getdata);

  if (
    datainobj.mail === loginemail.value &&
    datainobj.password === loginpassword.value
  ) {
    loginformEl[0].style.display = "none";
    greentick.style.display = "block";
    setInterval(() => {
      greentick.style.display = "none";
      loginformEl[0].style.display = "block";
    }, 2000);
  } else {
    loginformEl[0].style.display = "none";
    redtick.style.display = "block";
    setInterval(() => {
      redtick.style.display = "none";
      loginformEl[0].style.display = "block";
    }, 2000);
    indicater.innerText = "Email or password incorrect";
  }
});
