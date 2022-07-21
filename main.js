// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");
let number = document.getElementById("name-number");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {
  let allname = "";
  for (let i = 0; i < babyData.length; i++) {
    allname += characterallname(babyData[i]);
   
    console.log("Display All");
    // Confirm data load
    console.log(babyData);
    number.innerHTML = i;
  }
   container.innerHTML = allname;
}

// Display Names by Gender
function searchGender() {
  let boys = "";
  let girls = "";
  l = 0;
  g = prompt("type in gender");
  let htmlStr = "";
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].gender === g) {
      l++;
      htmlStr += characterallname(babyData[i]);
    }
    number.innerHTML = l;
  }
  container.innerHTML = htmlStr;

  console.log("Search By Gender");
}

// Display Names within a Range of Ranks
function searchRank() {
  let htmlStr = "";
  q = 0;
  f = prompt("enter min rank");
  k = prompt("enter max rank");
  for (let i = 0; i < babyData.length; i++) {
    ranks = babyData[i].rank;
    if (ranks <= k && ranks >= f) {
      q++;
      htmlStr += characterallname(babyData[i]);
    }
    number.innerHTML = q;
  }
  container.innerHTML = htmlStr;
  console.log("Search By Rank");
}

// Display Names with Starting Letter
function searchStartingLetter() {
  q = 0;
  let htmlStr = "";
  g = prompt("enter a letter");
  for (let i = 0; i < babyData.length; i++) {
    h = babyData[i].name;
    if (h[0] === g) {
      q++;
      htmlStr += characterallname(babyData[i]);
    }
    number.innerHTML = q;
  }

  console.log(htmlStr);
  container.innerHTML = htmlStr;
  console.log("Search by Starting Letter");
}

// Display Names with a Specific Length
function searchLength() {
  q = 0;
  let htmlStr = "";
  j = prompt("enter sepcified length");
  for (let i = 0; i < babyData.length; i++) {
    b = babyData[i].name.length;
    console.log(j);
    console.log(b);
    if (b == j) {
      console.log("jackass");
      q++;
      htmlStr += characterallname(babyData[i]);
    }
    number.innerHTML = q;
  }

  container.innerHTML = htmlStr;
  console.log("Search by Name Length");
}
function characterallname(x) {
  return `
<div>
  <p>
  <strong>${x.name}</strong> (Gender:${x.gender}, Rank:${x.rank})
  </p>
</div>`;
}
