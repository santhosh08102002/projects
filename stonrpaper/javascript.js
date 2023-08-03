const personchoice = document.getElementById("personchoice");
const computerchoice = document.getElementById("computerchoice");
const replace = document.getElementById("replace");
const formel = document.forms.radioform;
const radiobtns = formel.elements.game;
const allradiobtn = [...radiobtns];

function submit(event) {
  event.preventDefault();
  const random = Math.floor(Math.random() * 10) + 1;

  let computerChoiceList = {
    paper: random <= 3,
    stone: random <= 6,
    sessor: random <= 10,
  };
  let personChoiceList = {
    paper: allradiobtn[0].checked === true,
    stone: allradiobtn[1].checked === true,
    sessor: allradiobtn[2].checked === true,
  };
  let finaldesiton = {
    paper_sessor: personChoiceList.paper && computerChoiceList.sessor,
    paper_stone: personChoiceList.paper && computerChoiceList.stone,
    stone_paper: personChoiceList.stone && computerChoiceList.paper,
    stone_sessor: personChoiceList.stone && computerChoiceList.sessor,
    sessor_paper: personChoiceList.sessor && computerChoiceList.paper,
    sessor_stone: personChoiceList.sessor && computerChoiceList.stone,
  };
  if (finaldesiton.paper_sessor) {
    personchoice.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';

    computerchoice.innerHTML = '<i class="fa-solid fa-scissors"></i>';
    replace.innerText = "I'm Win 😎";
  } else if (finaldesiton.paper_stone) {
    personchoice.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
    computerchoice.innerHTML = '<i class="fa-solid fa-bomb"></i>';
    replace.innerText = "You Win 👍";
  } else if (finaldesiton.stone_paper) {
    personchoice.innerHTML = '<i class="fa-solid fa-bomb"></i>';
    computerchoice.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
    replace.innerText = "I'm Win 😎";
  } else if (finaldesiton.stone_sessor) {
    personchoice.innerHTML = '<i class="fa-solid fa-bomb"></i>';
    computerchoice.innerHTML = '<i class="fa-solid fa-scissors"></i>';
    replace.innerText = "You Win 👍";
  } else if (finaldesiton.sessor_paper) {
    personchoice.innerHTML = '<i class="fa-solid fa-scissors"></i>';
    computerchoice.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
    replace.innerText = "You Win 👍";
  } else if (finaldesiton.sessor_stone) {
    personchoice.innerHTML = '<i class="fa-solid fa-scissors"></i>';
    computerchoice.innerHTML = '<i class="fa-solid fa-bomb"></i>';
    replace.innerText = "I'm Win 😎";
  } else {
    replace.innerText = "tie";
  }
}

document.addEventListener("keydown", (event) => {
  let enter = (event.key = "Enter");
  enter = submit(event);
});
