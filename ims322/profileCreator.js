// opens the modal immediately when the page is loaded
let modal = document.getElementById("modal");
modal.showModal();
// ----- close
let closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", closeModal);

function closeModal() {
  modal.close();
}

// ----- submit
let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", gatherInfo);

function gatherInfo() {
  var profileDisplay = document.getElementById("profile");
  profileDisplay.style.display = "flex";

  let numberInput = document.getElementById("number-input");
  let textOutput = document.getElementById("text-output");
  let numberValue = numberInput.value;

  let displayName = document.getElementById("display-name");
  let displayNameOutput = document.getElementById("display-name-output");
  let displayNameValue = displayName.value;

  let dropDown = document.getElementById("drop-down");
  let dropDownOutput = document.getElementById("drop-down-output");
  let dropDownValue = dropDown.value;

  let bio = document.getElementById("bio");
  let bioOutput = document.getElementById("bio-output");
  let bioValue = bio.value;
  // check to see if the value is empty first
  if (displayNameValue) {
    displayNameOutput.innerText = displayNameValue;
  }
  console.log(displayNameValue);

  let profileImg = document.getElementById("profile-img");
  profileImg.className = "profile-img";

  if (dropDownValue) {
    dropDownOutput.innerText = dropDownValue;

    let imgTag = document.getElementById("img-tag");
    if (dropDownValue == "Pawn")
      imgTag.src = "../img/ims322/profileCreator/pawnIcon.webp";
    if (dropDownValue == "Bishop")
      imgTag.src = "../img/ims322/profileCreator/bishopIcon.webp";
    if (dropDownValue == "Knight")
      imgTag.src = "../img/ims322/profileCreator/knightIcon.webp";
    if (dropDownValue == "Rook")
      imgTag.src = "../img/ims322/profileCreator/rookIcon.webp";
    if (dropDownValue == "King")
      imgTag.src = "../img/ims322/profileCreator/kingIcon.webp";
    if (dropDownValue == "Queen")
      imgTag.src = "../img/ims322/profileCreator/queenIcon.webp";
  }

  if (numberValue) {
    textOutput.innerText = numberValue;
  }

  if (bioValue) {
    bioOutput.innerText = bioValue;
  }
}
