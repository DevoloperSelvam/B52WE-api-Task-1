const apiUrl = "https://random.dog/woof.json";

const imageArea = document.getElementById("dog");

const overlayElement = document.getElementById("overlay");

const loaddogImage = ({ url }) => {
  const imgElement = document.getElementById("img-element");
  imgElement.src = url;
};

const sleepTime = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });

const getdog = async () => {
  overlayElement.style.display = "flex";
  const response = await fetch(apiUrl);
  const data = await response.json();

  loaddogImage(data);
  overlayElement.style.display = "none";
};

getdog();