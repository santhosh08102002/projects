let form = document.forms.Todoform;
let addinput = form[0];
const ul = document.getElementById("listholder");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = addinput.value;
  if (item === "") {
    return null;
  }
  let li = document.createElement("li");
  let input_in_li = document.createElement("input");
  input_in_li.setAttribute("class", "list");
  input_in_li.setAttribute("type", "checkbox");
  input_in_li.setAttribute("id", item);
  li.append(input_in_li);
  let label_in_li = document.createElement("label");
  label_in_li.setAttribute("for", item);
  label_in_li.innerText = item;
  li.append(label_in_li);
  let button_in_li = document.createElement("button");
  button_in_li.setAttribute("onclick", "delbtn(event)");
  button_in_li.innerText = "del";
  li.append(button_in_li);
  ul.prepend(li);

  let toStore = [
    {
      check: li.children[0].checked,
      text: li.children[1].innerText,
      delbtns: li.children[2].innerText,
    },
  ];
  localStorage.setItem("Todolist", JSON.stringify(toStore));
  addinput.value = "";
});

ul.addEventListener("click", () => {
  let all = [...ul.children];
  all.forEach((lis) => {
    if (lis.children[0].checked === true) {
      lis.children[1].style.textDecoration = "line-through";
    } else {
      lis.children[1].style.textDecoration = "none";
    }
    console.dir();
  });
});
{
  let retriveData = localStorage.getItem("Todolist");
  let retrivedata_arr = JSON.parse(retriveData);
  retrivedata_arr.forEach((objs) => {
    let li = document.createElement("li");
    let input_in_li = document.createElement("input");
    input_in_li.setAttribute("class", "list");
    input_in_li.setAttribute("type", "checkbox");
    input_in_li.checked = objs.check;
    input_in_li.setAttribute("id", objs.text);
    li.append(input_in_li);
    let label_in_li = document.createElement("label");
    label_in_li.setAttribute("for", objs.text);
    label_in_li.innerText = objs.text;
    li.append(label_in_li);
    let button_in_li = document.createElement("button");
    button_in_li.setAttribute("onclick", "delbtn(event)");
    button_in_li.innerText = objs.delbtns;
    li.append(button_in_li);
    ul.prepend(li);
  });
}
function delbtn(event) {
  let delbtn = event.target;
  let del_li = delbtn.parentElement;
  del_li.remove();
  localStorage.removeItem("Todolist");
}
