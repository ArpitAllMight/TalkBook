// Scroll To Top
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle Active Class In SideBar
const menuItems = document.querySelectorAll(".menuItem");
console.log(menuItems);
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menuItems.forEach((anchorTag) => anchorTag.classList.remove("active"));
    this.classList.add("active");

    if (item.id != "notification") {
      document.querySelector(".notificationPopup").style.display = "none";
    } else {
      document.querySelector(".notificationPopup").style.display = "block";
      document.querySelector(".notificationPopup").style.boxShadow =
        "2px 2px 10px var(--color-primary)";
      document.querySelector("#notification .notificationCount").style.display =
        "none";
    }
  });
});

// Highlight Message Section When Message Button Clicked
const msgNotifications = document.querySelector("#messageNotification");
const msgs = document.querySelector(".messages");

msgNotifications.addEventListener("click", () => {
  msgs.style.boxShadow = "2px 2px 10px var(--color-primary)";
  msgNotifications.querySelector(".notificationCount").style.display = "none";
  setTimeout(() => {
    msgs.style.boxShadow = "none";
  }, 2000);
});

// Search By Message Name
// const message = msgs.querySelectorAll(".msg");
// const msgSearch = document.querySelector("#msgSearch");
// const msgSearchFunction = () => {
//   const val = msgSearch.value.toLowerCase();
//   console.log(val);
//   message.forEach((chat) => {
//     let name = chat.querySelectorAll("h5").textContent.toLowerCase();
//     if (name.indexOf(val) != -1) {
//       chat.style.display = "block";
//     } else {
//       chat.style.display = "none";
//     }
//   });
// };
// msgSearch.addEventListener("keyup", msgSearchFunction);

// function search() {
//   let filter = document.getElementById("msgSearch").value.toUpperCase();
//   console.log(filter);
//   let item = document.querySelectorAll(".msg");
//   let h = document.querySelectorAll(".msgBy");

//   for (var m = 0; m <= h.length; m++) {
//     let elementM = h[m].querySelectorAll(".msgBy")[0];
//     let value =
//       elementM.innerHTML || elementM.innerText || elementM.textContent;

//     if (value.toUpperCase().indexOf(filter) > -1) {
//       item[m].style.display = "";
//     } else {
//       item[m].style.display = "none";
//     }
//   }
// }

// Message Box Open With Click Function

// Theme Customization
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customizeTheme");
// Open Function
const openThemeModal = () => {
  themeModal.style.display = "flex";
};
// Close Function
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customizeTheme")) {
    themeModal.style.display = "none";
  }
};
// Close
themeModal.addEventListener("click", closeThemeModal);
// Open
theme.addEventListener("click", openThemeModal);

// Toggle Active Class In Font Sizes
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

// Change Font Sizes
const fontSizes = document.querySelectorAll(".chooseSize span");
fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("fontSize1")) {
      fontSize = "10px";
    } else if (size.classList.contains("fontSize2")) {
      fontSize = "13px";
    } else if (size.classList.contains("fontSize3")) {
      fontSize = "16px";
    } else if (size.classList.contains("fontSize4")) {
      fontSize = "19px";
    } else if (size.classList.contains("fontSize5")) {
      fontSize = "22px";
    }
    // Change Font Size Of The Root Html Element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// Remove Active Class From ColorPalate
const changeActiveClass = () => {
  colorPalate.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};
// Change Theme Color
const colorPalate = document.querySelectorAll(".chooseColor span");
const root = document.querySelector(":root");
colorPalate.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeActiveClass();

    if (color.classList.contains("color1")) {
      primary = 252;
    } else if (color.classList.contains("color2")) {
      primary = 52;
    } else if (color.classList.contains("color3")) {
      primary = 352;
    } else if (color.classList.contains("color4")) {
      primary = 152;
    } else if (color.classList.contains("color5")) {
      primary = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primary);
  });
});

// Change Color Mode Light To Dark
const Bg1 = document.querySelector(".bg1");
const Bg2 = document.querySelector(".bg2");
const Bg3 = document.querySelector(".bg3");

let darkColorLight;
let lightColorLight;
let whiteColorLight;

// Change Background Color Function
const changeBg = () => {
  root.style.setProperty("--dark-color-light", darkColorLight);
  root.style.setProperty("--light-color-light", lightColorLight);
  root.style.setProperty("--white-color-light", whiteColorLight);
};

Bg1.addEventListener("click", () => {
  // Add Active Class
  Bg1.classList.add("active");
  // Remove Active Class
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  // Remove Customized Changes From Local Storage
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLight = "95%";
  whiteColorLight = "20%";
  lightColorLight = "15%";
  // Add Active Class
  Bg2.classList.add("active");
  // Add Remove Class
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBg();
});
Bg3.addEventListener("click", () => {
  darkColorLight = "95%";
  whiteColorLight = "10%";
  lightColorLight = "0%";
  // Add Active Class
  Bg3.classList.add("active");
  // Add Remove Class
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBg();
});
