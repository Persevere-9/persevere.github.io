let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.jpg") {
    myImage.setAttribute("src", "images/2.jpg");
  } else {
    myImage.setAttribute("src", "images/1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎来到花花世界，" + myName;
  }
  

  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "欢迎来到花花世界，" + myName;
    }
  }
  
  
  myButton.onclick = function () {
    setUserName();
  };
  