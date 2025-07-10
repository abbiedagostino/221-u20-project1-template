function checkKeyPress(e) {
  if (e.code === "click") {
    e.preventDefault();
    goToLocation("/http://my.marist.edu");
  }
}

function goToLocation(path) {
  window.location.href = path;
}
document.addEventListener("DOMContentLoaded", function () {
  document.body.setAttribute("tabindex", "0");
  document.body.focus();
  document.body.addEventListener("keydown", checkKeyPress);
  const portalDiv = document.getElementById("portal_button");
  if (portalDiv) {
    portalDiv.style.cursor = 'pointer';
    portalDiv.addEventListener("click", () => {
      console.log("Test");
      goToLocation("http://my.marist.edu");
    })
  }
});

const feeditem1 = {
  title: "Marist Story 1"
  body: "Story 1 this is"
  linkurl: "https://goredfoxes.com/news/2025/6/17/mens-track-field-logan-schaeffler-set-to-compete-at-usatf-u20-national-championships.aspx"
  image: "/images/news_pic.jpg"
};

const feeditem2 = {
  title: "Marist Story 2",
  body: "this is story 2",
  linkurl: "https://goredfoxes.com/news/2025/7/9/marist-womens-basketball-heads-to-paradise-jam.aspx ",
  imageurl: "/images/hancock.jpeg",
};

const feeditem3 = {
  title: "Marist story 3"
  body: "This is story 3"
  linkurl: "https://goredfoxes.com/news/2025/7/2/four-marist-softball-players-finish-atop-ncaa-statistical-categories.aspx"
  imageurl:"/images/campus.png"
};

let currentStories = [feeditem1, feeditem2, feeditem3];
/*
function displayItem(feedItem) {
  const newsfeed = document.getElementById("newsfeed");
  newsfeed.innerHTML += `


  `;
}
*/
window.addEventListener("load", function () { 
  const newsfeed = document.getElementById("newsfeed");
  for (let i = 0; i < currentStories.length; i++)
  {
    newsfeed.innerHTML += currentStories[0]
    
  }
});