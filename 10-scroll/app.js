// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************ used this to set the date dynamically so it can change on its own yearly
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   if (linksContainer.classList.contains("show-links")) {
  //     linksContainer.classList.remove("show-links");
  //   } else {
  //     linksContainer.classList.add("show-links");
  //   }
  // 0R
  //   linksContainer.classList.toggle("show-links");

  // OR we can add the height(show-links) dynamically using the getBoundingclient method
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 700) {
    topLink.classList.toggle("show-link");
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default scrolling
    e.preventDefault();
    // navigate to specific link item
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the height
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    // we minused the navheight here because it blocks the  heading of link item when clicked
    let position = element.offsetTop - navHeight;
    // this was used because the navbar when not fixed when the link item is clicked it is not displaying the exact position e,g when u click about it takes u to about but the about title is hidden
    if (!fixedNav) {
      position = position - navHeight;
    }
    // this was used because when the above is done the section becomes big and it doesnt oint to the right section e,g the about section would still showing some part of the section which is above it
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
// select links
