function checkKeyPress(e) {
  if (e.code === "Space") {
    e.preventDefault();
    goToLocation("http://my.marist.edu");
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
    portalDiv.style.cursor = "pointer";
    portalDiv.addEventListener("click", () => {
      console.log("Test");
      goToLocation("http://my.marist.edu");
    });
  }
});

window.addEventListener("load", getCurrentFeed);

function displayItem(item, index) {
  const newsfeed = document.getElementById("newsfeed");

  newsfeed.innerHTML += `
    <div class="item">
      <h2>${item.title}</h2>
      <img class="feedImage" src="${item.imageUrl}" alt="${item.title}">
      <p>${item.body}</p>
      <a href="${item.linkUrl}" target="_blank" rel="noopener noreferrer">Read more</a><br>
      <button onclick="deleteFeedItem(${index})">Delete</button>
    </div>
    <hr>
  `;
}

function getCurrentFeed() {
  const newsfeed = document.getElementById("newsfeed");
  newsfeed.innerHTML = ""; 

  fetch("/feed/api")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item, index) => {
        displayItem(item, index);
      });
    })
    .catch((err) => {
      console.error("Failed to load feed:", err);
    });
}

function deleteFeedItem(id) {
  fetch(`/feed/api/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        getCurrentFeed(); 
      } else {
        console.error("Delete failed");
      }
    })
    .catch((err) => console.error("Error:", err));
}
