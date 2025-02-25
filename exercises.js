// 1. Create a function called changeText that changes the text inside the <h1> tag when called.
function changeText() {
  document.querySelector('h1').innerText = 'Hello, World!';
}
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeText()">Change Text</button>
let changeTextButton = document.getElementById('changeTextButton');
changeTextButton.innerText = 'changeText';


// 2. Create a function called changeColor that changes the background color of the page when a button is clicked.
function changeColor() {
  document.body.style.backgroundColor = 'red';
}
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeColor()">Change Background Color</button>
let changeColorButton = document.getElementById('changeColorButton');
changeColorButton.onclick = changeColor;


// 3. Create a function called toggleImage that toggles the visibility of the image when a button is clicked.
function toggleImage() {
  let image = document.querySelector('img');
  if (image.style.display === 'none') {
    image.style.display = 'block';
  } else {
    image.style.display = 'none';
  }
}
// Add this function to the onclick attribute of a button in index.html: <button onclick="toggleImage()">Toggle Image</button>
let toggleImageButton = document.getElementById('toggleImageButton');
toggleImageButton.onclick = toggleImage;


// 4. Create a function called growBox that increases the size of the div box when a button is clicked.
function growBox() {
  let box = document.getElementById('box');
  box.style.width = '400px';
  box.style.height = '400px';
}
// Add this function to the onclick attribute of a button in index.html: <button onclick="growBox()">Grow Box</button>
let growBoxButton = document.getElementById('growBoxButton');
growBoxButton.onclick = growBox;


// 5. Create a function called changeParagraph that changes the text inside the paragraph when a button is clicked.
function changeParagraph() {
  document.querySelector('p').innerText = 'This is a new paragraph!';
}
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeParagraph()">Change Paragraph</button>
let changeParagraphButton = document.getElementById('changeParagraphButton');
changeParagraphButton.onclick = changeParagraph;


// 6. Create a function called changeTextColor that changes the text color of the heading when a button is clicked.
function changeTextColor() {
  document.querySelector('h1').style.color = 'red';
}
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeTextColor()">Change Text Color</button>
let changeTextColorButton = document.getElementById('changeTextColorButton');
changeTextColorButton.onclick = changeTextColor;


// 7. Create a function called hideParagraph that hides the paragraph when a button is clicked.
function hideParagraph() {
  let paragraph = document.querySelector('p');
  if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block';
  } else {
    paragraph.style.display = 'none';
  }
}
// Add this function to the onclick attribute of a button in index.html: <button onclick="hideParagraph()">Hide Paragraph</button>
let hideParagraphButton = document.getElementById('hideParagraphButton');
hideParagraphButton.onclick = hideParagraph;


// 8. Create a function called changeLink that changes the link URL to "https://www.google.com" and updates its text to "Go to Google" when a button is clicked.
function changeLink() {
  let link = document.getElementById('myLink');
  link.href = 'https://www.google.com';
  link.innerText = 'Go to Google';
}
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeLink()">Change Link</button>
let changeLinkButton = document.getElementById('changeLinkButton');
changeLinkButton.onclick = changeLink;


// 9. Create a function called changeImage that changes the image source to "newimage.jpg" when a button is clicked.
function changeImage() {
  let image = document.querySelector('img');
  image.src = 'newimage.jpg';
}
// Add this function to the onclick attribute of a button in index.html: <button onclick="changeImage()">Change Image</button>
let changeImageButton = document.getElementById('changeImageButton');
changeImageButton.onclick = changeImage;


// 10. Create a function called addBorder that adds a black border to the div box when a button is clicked.
function addBorder() {
  let box = document.getElementById('box');
  box.style.border = '2px solid black';
}
// Add this function to the onclick attribute of a button in index.html: <button onclick="addBorder()">Add Border</button>
let addBorderButton = document.getElementById('addBorderButton');
addBorderButton.onclick = addBorder;
