const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/nya.jpg") {
    myImage.setAttribute("src", "images/bear-taxi.jpg");
    myImage.setAttribute("alt", "bear in a taxi");
  } else if (mySrc === "images/bear-taxi.jpg") {
    myImage.setAttribute("src", "images/parasitic-infection.jpg");
    myImage.setAttribute("alt", 'parasitic infection saying ":3"');
  } else if (mySrc === "images/parasitic-infection.jpg") {
    myImage.setAttribute("src", "images/nya.jpg");
    myImage.setAttribute("alt", ":3");
  }
};