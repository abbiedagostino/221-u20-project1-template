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
  title: "Mens Track and  Field",
  body: "Logan Schaeffler to compete in national championship!",
  linkurl: "https://goredfoxes.com/news/2025/6/17/mens-track-field-logan-schaeffler-set-to-compete-at-usatf-u20-national-championships.aspx",
  imageurl: "/images/news_pic.jpg",
};

const feeditem2 = {
  title: "Woman's Basketball",
  body: "Marist Basketball team takes part in Paradise Jam, a prestigious basketball tournament. ",
  linkurl: "https://goredfoxes.com/news/2025/7/9/marist-womens-basketball-heads-to-paradise-jam.aspx ",
  imageurl: "/images/hancock.jpeg",
};

const feeditem3 = {
  title: "Marist Softball",
  body: "Marist Sofball players finish in top categories!",
  linkurl: "https://goredfoxes.com/news/2025/7/2/four-marist-softball-players-finish-atop-ncaa-statistical-categories.aspx",
  imageurl: "/images/campus.png",
};

let currentStories = [feeditem1, feeditem2, feeditem3];


window.addEventListener("load", function () {
  const newsfeed = document.getElementById("newsfeed");
  function displayItem(item) {

    for (let i = 0; i < currentStories.length; i++) {
      const story = currentStories[i];
      newsfeed.innerHTML += ` 
    <div class="item">
        <h2>${story.title}</h2>
        <img class="feedImage" src="${story.imageurl}" alt="${story.title}">
        <p>${story.body}</p>
        <a href="${story.linkUrl}">Read more</a><br>
      </div>
      <hr>
    `;
    }
  }
  displayItem();
});
