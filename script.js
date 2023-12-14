const button = document.getElementById("buildURLBtn");
button.addEventListener("click", function () {
  generateUser();
});
const userURL = document.getElementById("username");
userURL.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    generateUser();
  }
});
function generateUser() {
  const userURL = document.getElementById("username").value;
  const githubURL = `https://api.github.com/users/${userURL}`; //
  fetch(githubURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //IMAGE
      const imageURL = data.avatar_url;
      console.log(imageURL);
      const profile = document.getElementById("profile");
      profile.style.height = "70px";
      profile.style.width = "70px";
      profile.style.borderRadius = "50px";
      profile.src = imageURL;
      //ABOUT
      document.getElementById("name").innerHTML = data.name;
      const userID = document.getElementById("userID");
      userID.innerText = `@${data.login}`;
      const created_at = data.created_at;
      document.getElementById(
        "joningDate"
      ).innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${created_at.slice(
        0,
        10
      )}`;
      document.getElementById("bio").innerHTML =
        data.bio === null ? " Bio : NuLL" : `Bio : ${data.bio}`;
      document.getElementById(
        "repo"
      ).innerHTML = `Repos <br/> ${data.public_repos}`;
      document.getElementById(
        "following"
      ).innerHTML = ` Following <br/> ${data.following}`;
      document.getElementById(
        "followers"
      ).innerHTML = `Followers <br/> ${data.followers}`;
      const location = document.getElementById("location");
      location.innerHTML =
        data.location === null
          ? `<i class="fa-solid fa-location-dot"></i> NO LOCATION AVAILABLE `
          : `<i class="fa-solid fa-location-dot"></i> ${data.location}`;
      const twitter = document.getElementById("twitter_username");
      twitter.innerHTML =
        data.twitter_username === null
          ? `<i class="fab fa-twitter"></i> Not Available`
          : `<i class="fab fa-twitter"></i> ${data.twitter_username}`;
      document.getElementById("userURL").innerHTML =
        data.html_url === null
          ? `<i class="fa-solid fa-link "NULL"`
          : `<i class="fa-solid fa-link"></i> ${data.html_url}`;
      document.getElementById("company").innerHTML =
        data.company === null
          ? `<i class="fa-solid fa-building"></i>  NO COMPANY AVAILABLE `
          : `<i class="fa-solid fa-building"></i> ${data.company}`;
    })
    .catch(() => {
      document.getElementById("body").innerHTML = "User Not Available";
    });
}
