const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
//brought over code from the accidentally unforked copy I was working on.
//brought over code from the accidentally unforked copy I was working on.
//brought over code from the accidentally unforked copy I was working on.

// const titleChange = document.getElementsByTagName("title");
// titleChange.textContent = "Great Idea!";

const navChange = document.getElementsByTagName("a");
navChange[0].textContent = "Services";
navChange[1].textContent = "Product";
navChange[2].textContent = "Vision";
navChange[3].textContent = "Features";
navChange[4].textContent = "About";
navChange[5].textContent = "Contact";

const h1Change = document.getElementsByTagName("h1");
h1Change[0].innerHTML = "DOM<br> Is<br> Awesome";

const buttonChange = document.getElementsByTagName("button");
buttonChange[0].textContent = "Get Started";

const newCirclePic = document.getElementById("cta-img");
newCirclePic.setAttribute("src", siteContent["cta"]["img-src"]);

const newMiddleImg = document.getElementById("middle-img");
newMiddleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Not Sure where this code is off yet, but its making divs instead of h4s
const newMainTopText = document.getElementsByClassName("text-content");
newMainTopText[0].textContent = siteContent["main-content"]["features-h4"];
newMainTopText[1].textContent = siteContent["main-content"]["about-h4"];
newMainTopText[2].textContent = siteContent["main-content"]["services-h4"];
newMainTopText[3].textContent = siteContent["main-content"]["product-h4"];
newMainTopText[4].textContent = siteContent["main-content"]["vision-h4"];

//broken code

// h4Change.forEach((ele)=>{
//   ele[i].innerHTML = siteContent["cta"]["main-content"][i+2]
// // })
// const h4Change = document.getElementsByClassName("text-content");
// console.log("text-content");
// h4Change[0].textContent = siteContent["cta"]["main-content"][0];
