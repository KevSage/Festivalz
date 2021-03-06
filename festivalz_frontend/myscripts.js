// Implement Scroll to top

document.addEventListener("DOMContentLoaded", event => {
  // allArtists(event)
  // generateUserPage(event)
  generateLogin(event);
  let artistLink = document.querySelector("#artists-link");
  artistLink.addEventListener("click", allArtists);

  let festivalLink = document.querySelector("#festivals-link");
  festivalLink.addEventListener("click", allFestivals);

  let profile = document.querySelector("#my-profile");
  profile.addEventListener("click", showUserPage);
});
let currentUser = {
  username: "",
  image: "",
  region: "",
  id: "",
  follows: []
};

function generateLogin(event) {
  //    event.preventDefault

  let main = document.querySelector(".test");
  main.innerHTML = "";
  let lower = document.querySelector(".artists");
  lower.innerHTML = "";

  main.style.display = "block";
  main.style.backgroundImage =
    "url('https://pixabay.com/get/57e7d4454c50a914f6d1867dda6d49214b6ac3e4565972417d2f79d097/music-festival-1716625_1920.jpg')";
  main.classList.add("uk-background-fixed", "uk-background-cover");
  main.style.height = "100vh";

  let loginForm = document.createElement("form");
  loginForm.classList.add("uk-form-custom");
  let loginFieldset = document.createElement("FIELDSET");
  loginFieldset.classList.add("uk-fieldset");
  let loginLegend = document.createElement("legend");
  loginLegend.classList.add("uk-legend");
  loginLegend.innerHTML = "Login";
  loginLegend.style.color = "white";
  let loginDiv = document.createElement("div");
  loginDiv.classList.add("uk-margin");
  let loginInput = document.createElement("input");
  loginInput.id = "loginInput";
  let loginButton = document.createElement("button");
  loginButton.innerHTML = "Login";
  loginButton.classList.add("uk-button", "uk-button-default");
  loginButton.style.color = "white";
  loginInput.classList.add("uk-input", "uk-form-width-medium");
  loginButton.addEventListener("click", loginUser);
  let register = document.createElement("a");
  register.innerHTML = "Sign up now!";

  register.addEventListener("click", registerUser);
  register.style.marginLeft = "60px";
  register.style.color = "white";
  register.style.fontSize = "30px";
  register.style.display = "block";

  loginFieldset.appendChild(loginLegend);
  loginFieldset.appendChild(loginDiv);
  loginDiv.appendChild(loginInput);
  loginDiv.appendChild(loginButton);
  loginDiv.appendChild(register);
  loginForm.appendChild(loginFieldset);
  main.appendChild(loginForm);
}

function loginUser(event) {
  event.preventDefault();
  let input = document.querySelector("#loginInput").value;
  fetch("http://127.0.0.1:3000/users")
    .then(response => response.json())
    .then(users => {
      users.forEach(function(user) {
        if (user.username === input) {
          currentUser = user;
          showUserPage();
        }
      });
    });
}

function registerUser(event) {
  event.preventDefault();
  let main = document.querySelector(".test");
  main.innerHTML = "";

  //Create Form
  let registerForm = document.createElement("form");
  registerForm.addEventListener("submit", createUser);
  registerForm.classList.add("uk-form-stacked");
  registerForm.classList.add("uk-margin-auto");

  registerForm.classList.add("registerForm");

  //Form<Fieldset
  let registerFieldset = document.createElement("FIELDSET");
  registerFieldset.classList.add("uk-fieldset");

  let registerDiv = document.createElement("div");
  registerDiv.classList.add("uk-margin");

  //Form<Fieldset<Username
  let nameInput = document.createElement("input");
  nameInput.setAttribute("id", "newUserName");
  nameInput.classList.add("uk-input", "uk-form-width-medium");
  nameInput.placeholder = "Enter Username";

  //Form<Fieldset<Region Div
  let regionDiv = document.createElement("div");
  regionDiv.classList.add("uk-margin");
  //Region Select
  let regionSelect = document.createElement("select");
  regionSelect.classList.add("uk-select");
  regionSelect.setAttribute("id", "regionOption");
  //Form<Fieldset<RegionDiv<RegionSelect<Region Options
  let regionOption1 = document.createElement("option");
  regionOption1.innerHTML = "Southeast";
  let regionOption2 = document.createElement("option");
  regionOption2.innerHTML = "Northeast";
  let regionOption3 = document.createElement("option");
  regionOption3.innerHTML = "Midwest";
  let regionOption4 = document.createElement("option");
  regionOption4.innerHTML = "West Coast";
  let regionOption5 = document.createElement("option");
  regionOption5.innerHTML = "Southwest";
  //Append Region
  regionSelect.appendChild(regionOption1);
  regionSelect.appendChild(regionOption2);
  regionSelect.appendChild(regionOption3);
  regionSelect.appendChild(regionOption4);
  regionSelect.appendChild(regionOption5);

  //Append Button
  let registerButton = document.createElement("button");
  registerButton.innerHTML = "Register";
  registerButton.classList.add("uk-button", "uk-button-default");
  registerButton.style.color = "white";
  regionDiv.appendChild(regionSelect);

  //    registerDiv.appendChild(usernameLabel)
  registerFieldset.appendChild(registerDiv);
  registerDiv.appendChild(nameInput);
  registerDiv.appendChild(regionDiv);
  registerDiv.appendChild(registerButton);
  registerForm.appendChild(registerFieldset);
  main.appendChild(registerForm);
}

function generateUserPage() {
  let main = document.querySelector(".test");
  main.innerHTML = "";
  main.className = "test";
  let container = document.createElement("div");
  container.classList.add("uk-height-large");
  container.classList.add("uk-background-cover");
  container.classList.add("uk-light");
  container.classList.add("uk-flex");
  container.style.backgroundImage =
    "url('https://pixabay.com/get/57e7d4454c50a914f6d1867dda6d49214b6ac3e4565972417d2f79d097/music-festival-1716625_1920.jpg')";
  container.setAttribute("uk-parallax", "bgy: -10");
  main.appendChild(container);
  generateFestivals(event);
}

function generateFestivals() {}
function allArtists(event) {
  event.preventDefault();
  scrollWin();

  let main = document.querySelector(".test");
  let artists = document.querySelector(".artists");
  // artists.innerHTML = ""
  main.innerHTML = "";
  main.style.backgroundImage =
    "url('https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/04-22-16_DPV_6412_Sweetwater_420_Fest_Disco_Biscuits_by_Dave_Vann.jpg')";
  main.style.height = "500px";
  artists.innerHTML = "";
  let artistHeader = document.createElement("div");
  artistHeader.innerHTML = "Featured Artists";
  artistHeader.classList.add("featured");
  artists.appendChild(artistHeader);

  fetch("http://localhost:3000/artists")
    .then(res => res.json())
    .then(data => {
      data.forEach(function(artist) {
        let artistCard = document.createElement("div");
        artistCard.classList.add("uk-card");
        artistCard.classList.add("uk-card-default");
        artistCard.classList.add("uk-grid-small");
        artistCard.classList.add("uk-child-width-expand@s");
        artistCard.classList.add("uk-text-center");
        artistCard.style.display = "inline-block";
        artistCard.style.width = "40%";

        let artistMedia = document.createElement("div");
        artistMedia.classList.add("uk-card-media-top");
        artistMedia.classList.add("uk-parallax");
        artistMedia.classList.add("uk-align-center");

        let artistBody = document.createElement("div");
        artistBody.classList.add("uk-card-body");

        let name = document.createElement("a");
        name.innerHTML = artist.name;
        name.addEventListener("click", showArtistPage);
        name.dataset.id = artist.id;

        let img = document.createElement("img");
        img.src = artist.image;
        img.style.width = "600px";

        artistMedia.appendChild(img);

        let bio = document.createElement("p");
        bio.innerHTML = artist.bio;

        let iframe = document.createElement("iframe");
        let spotify = artist.spotify;
        iframe.src = spotify;
        // iframe.style.display = "none";
        iframe.classList.add("iframe");

        let allArtists = document.querySelector(".artists");
        allArtists.classList.add("uk-grid");

        artistBody.appendChild(name);
        artistBody.appendChild(bio);
        artistBody.appendChild(iframe);

        artistMedia.appendChild(img);

        artistCard.appendChild(artistMedia);
        artistCard.appendChild(artistBody);
        artistCard.style.marginBottom = "50px";
        allArtists.appendChild(artistCard);
      });
    });
}

function allFestivals(event) {
  scrollWin();

  let jumbotron = document.querySelector(".test");
  jumbotron.style.display = "block";

  event.preventDefault();
  let main = document.querySelector(".test");
  let artists = document.querySelector(".artists");
  artists.className = "artists";
  let grid = document.createAttribute("uk-grid");
  artists.setAttributeNode(grid);
  artists.classList.add("uk-margin-top");

  artists.classList.add("uk-text-center");
  artists.classList.add("uk-flex");
  artists.classList.add("uk-flex-around");
  artists.classList.add("uk-grid");

  main.innerHTML = "";
  main.style.backgroundImage =
    "url('https://pixabay.com/get/57e7d4454c50a914f6d1867dda6d49214b6ac3e4565972417d2f79d097/music-festival-1716625_1920.jpg')";
  main.style.height = "600px";

  artists.innerHTML = "";
  fetch("http://localhost:3000/festivals")
    .then(res => res.json())
    .then(data => {
      data.forEach(function(festival) {
        let festivalCard = document.createElement("div");
        festivalCard.classList.add("uk-card");
        festivalCard.classList.add("uk-card-default");
        festivalCard.classList.add("uk-child-width-expand@s");
        festivalCard.classList.add("uk-margin-top");

        // festivalCard.style.display = "inline";
        festivalCard.style.width = "40%";

        let festivalMedia = document.createElement("div");
        festivalMedia.classList.add("uk-card-media-top");
        festivalMedia.classList.add("uk-parallax");
        festivalMedia.classList.add("uk-align-center");
        festivalMedia.classList.add("uk-margin-top");

        let festivalBody = document.createElement("div");
        festivalBody.classList.add("uk-card-body");

        let name = document.createElement("a");
        name.innerHTML = festival.name;
        name.addEventListener("click", showFestivalPage);
        name.dataset.id = festival.id;

        let img = document.createElement("img");
        img.src = festival.image;
        // img.width = "100%";

        festivalMedia.appendChild(img);

        let description = document.createElement("p");
        description.innerHTML = festival.description;

        let date = document.createElement("p");
        date.innerHTML = festival.date;

        let location = document.createElement("p");
        location.innerHTML = festival.location;

        let ticket = document.createElement("p");
        ticket.innerHTML = `$${festival.ticket_price}`;

        let allFestivals = document.querySelector(".artists");

        festivalBody.appendChild(name);
        festivalBody.appendChild(description);
        festivalBody.appendChild(date);
        festivalBody.appendChild(location);
        festivalBody.appendChild(ticket);

        festivalMedia.appendChild(img);

        festivalCard.appendChild(festivalMedia);
        festivalCard.appendChild(festivalBody);
        festivalCard.style.marginBottom = "50px";
        allFestivals.appendChild(festivalCard);
      });
    });
}

function showArtistPage(event) {
  scrollWin();
  let jumbotron = document.querySelector(".test");
  jumbotron.style.display = "block";
  let main = document.querySelector(".artists");
  main.style.height = "600px";
  fetch("http://localhost:3000/artists/" + event.target.dataset.id)
    .then(res => res.json())
    .then(artist => {
      //jumbotron

      //Artist Info div
      let artistInfo = document.createElement("div");
      artistInfo.style.justifyContent = "center";
      //Artist Name
      let name = document.createElement("h1");
      name.innerHTML = artist.name;
      //Artist Bio
      let bio = document.createElement("p");
      bio.innerHTML = artist.bio;

      //Spotify
      let iframe = document.createElement("iframe");
      let spotify = artist.spotify;
      iframe.src = spotify;
      iframe.style.display = "block";
      iframe.margin = "0px";

      //Followers
      let followers = document.createElement("p");
      followers.innerHTML = `${artist.follows.length} Followers`;

      //Follow Btn
      let followBtn = document.createElement("button");
      followBtn.innerHTML = "Follow Me";
      followBtn.classList.add("uk-button", "uk-button-primary", "demo");
      followBtn.dataset.id = artist.id;
      followBtn.setAttribute("type", "button");
      followBtn.setAttribute(
        "onclick",
        `UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> You are now following ${artist.name}'})`
      );

      followBtn.addEventListener("click", followArtist);

      artistInfo.appendChild(name);
      artistInfo.appendChild(bio);
      artistInfo.appendChild(iframe);
      artistInfo.appendChild(followers);
      artistInfo.appendChild(followBtn);

      //Upcoming Performances
      let performanceDiv = document.createElement("div");
      performanceDiv.style.display = "inline-block";

      let upcoming = document.createElement("h3");
      upcoming.innerHTML = `${artist.name}'s Upcoming Performances`;
      performanceDiv.appendChild(artistInfo, upcoming);

      artist.festivals.forEach(function(festival) {
        //jumbotron
        let jumbotron = document.querySelector(".test");
        jumbotron.innerHTML = "";
        main.innerHTML = "";
        main.classList.add("uk-container");
        main.style.textAlign = "center";

        jumbotron.style.backgroundImage = `url(${artist.image})`;
        jumbotron.style.backgroundSize = "100vh";
        jumbotron.style.height = "500px";

        jumbotron.classList.add("uk-container");

        //Festival Div
        let festivalDiv = document.createElement("div");
        festivalDiv.style.display = "inline-block";
        festivalDiv.style.width = "37%";
        festivalDiv.style.padding = "20px";

        //Festival Info
        let festivalPic = document.createElement("img");
        festivalPic.src = festival.image;
        let performance = document.createElement("a");
        performance.innerHTML = festival.name;
        performance.style.fontFamily = "Rock Salt,cursive";
        performance.style.fontSize = "20px";

        performance.dataset.id = festival.id;
        performance.addEventListener("click", showFestivalPage);
        let date = document.createElement("p");
        date.innerHTML = festival.date;
        let venue = document.createElement("p");
        venue.innerHTML = festival.location;
        let price = document.createElement("p");
        price.innerHTML = `Tickets: $${festival.ticket_price}`;
        let reserveBtn = document.createElement("button");
        reserveBtn.classList.add("uk-button-primary", "uk-button");
        reserveBtn.innerHTML = "I'm Going!";
        main.appendChild(performanceDiv);

        festivalDiv.appendChild(festivalPic);
        festivalDiv.appendChild(performance);
        festivalDiv.appendChild(venue);
        festivalDiv.appendChild(date);
        festivalDiv.appendChild(price);
        festivalDiv.appendChild(reserveBtn);
        performanceDiv.appendChild(festivalDiv);
        //Event Listeners
        reserveBtn.addEventListener("click", attendFestival);
        //    reserveBtn.addEventListener('click', showFestivalPage)

        main.appendChild(performanceDiv);
      });

      console.log(artist.performances);
    });
}

function createUser(event) {
  let jumbotron = document.querySelector(".test");
  jumbotron.style.display = "block";
  event.preventDefault();
  let pic = [];
  let newName = event.target.querySelector("#newUserName");
  let userName = newName.value;
  let regionOption = event.target.querySelector("#regionOption");
  let userRegion = regionOption.value;

  currentUser.username = userName;
  currentUser.region = userRegion;
  fetchPic();
}

function fetchPic() {
  let userPic = [];
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      let userData = data["results"];
      userData = userData[0];
      let pictures = userData.picture;
      let pics = Object.values(pictures);
      console.log(pics[2]);
      currentUser.image = pics[0];
      postUserData();
    });
}

function postUserData() {
  const newUser = {
    username: currentUser.username,
    image: currentUser.image,
    region: currentUser.region
  };

  fetch("http://127.0.0.1:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
    .then(response => response.json())
    .then(data => {
      currentUser.id = data.id;
      showUserPage();
    });
}

function showUserPage() {
  let jumbotron = document.querySelector(".test");
  jumbotron.style.display = "none";

  let main = document.querySelector(".artists");
  main.innerHTML = "";
  //Create container
  let article = document.createElement("article");
  article.classList.add("uk-comment", "uk-comment-primary");
  let header = document.createElement("header");
  header.classList.add("uk-comment-header", "uk-grid-medium", "uk-flex-middle");
  let grid = document.createAttribute("uk-grid");
  header.setAttributeNode(grid);

  //image div
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("uk-width-auto");
  //image
  let img = document.createElement("img");
  img.classList.add("uk-comment-avatar");
  img.src = currentUser.image;
  img.style.width = "150px";
  img.style.height = "150px";
  img.style.border_radius = "50%";

  imgDiv.appendChild(img);

  //User Info
  let infoDiv = document.createElement("div");
  infoDiv.classList.add("uk-width-expand");
  let userName = document.createElement("h4");
  userName.classList.add("uk-comment-title", "uk-margin-remove");
  userName.innerHTML = currentUser.username;
  let region = document.createElement("p");
  region.innerHTML = currentUser.region;

  infoDiv.appendChild(userName);
  infoDiv.appendChild(region);

  header.appendChild(imgDiv);
  header.appendChild(infoDiv);
  article.appendChild(header);
  main.appendChild(article);

  //Edit and Delete Buttons
  let profileBtns = document.createElement("p");
  let margin = document.createAttribute("uk-margin");
  profileBtns.setAttributeNode(margin);
  let editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", deleteUser);
  profileBtns.appendChild(editBtn);
  profileBtns.appendChild(deleteBtn);
  article.appendChild(profileBtns);

  //Edit Form
  let editForm = document.createElement("form");
  editForm.classList.add("toggleEdit");
  editForm.dataset.id = currentUser.id;

  let nameDiv = document.createElement("div");
  nameDiv.classList.add("uk-margin");
  let nameLabel = document.createElement("label");
  nameLabel.innerHTML = "Edit Name";
  let nameInput = document.createElement("input");
  nameInput.classList.add("uk-input", "uk-form-width-medium");
  nameInput.id = "edit-name";
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);
  editForm.appendChild(nameDiv);

  let regionDiv = document.createElement("div");
  regionDiv.classList.add("uk-margin");
  let regionLabel = document.createElement("label");
  regionLabel.innerHTML = "Edit Region";
  let regionSelect = document.createElement("select");
  regionSelect.classList.add("uk-select");
  regionSelect.id = "region-select";

  let regionOption1 = document.createElement("option");
  regionOption1.innerHTML = "Southeast";
  let regionOption2 = document.createElement("option");
  regionOption2.innerHTML = "Northeast";
  let regionOption3 = document.createElement("option");
  regionOption3.innerHTML = "Midwest";
  let regionOption4 = document.createElement("option");
  regionOption4.innerHTML = "West Coast";
  let regionOption5 = document.createElement("option");
  regionOption5.innerHTML = "Southwest";
  //Append Region
  regionSelect.appendChild(regionOption1);
  regionSelect.appendChild(regionOption2);
  regionSelect.appendChild(regionOption3);
  regionSelect.appendChild(regionOption4);
  regionSelect.appendChild(regionOption5);

  regionDiv.appendChild(regionLabel);
  regionDiv.appendChild(regionSelect);
  editForm.appendChild(regionDiv);

  let submitBtn = document.createElement("button");
  submitBtn.classList.add("uk-button", "uk-button-default");
  submitBtn.innerHTML = "Submit";
  editForm.appendChild(submitBtn);
  submitBtn.addEventListener("click", editUser);

  header.appendChild(editForm);
  editForm.style.display = "none";
  editBtn.addEventListener("click", function() {
    editForm.style.display = "block";
  });

  //Fetch Follows
  fetch("http://localhost:3000/users/" + currentUser.id)
    .then(res => res.json())
    .then(user => {
      let followDiv = document.createElement("div");
      let following = document.createElement("h4");
      following.innerHTML = `${currentUser.username} is currently following`;
      followDiv.appendChild(following);

      if (user.follows) {
        user.follows.forEach(function(follow) {
          let artistDiv = document.createElement("div");
          let followP = document.createElement("p");

          fetch("http://localhost:3000/follows/" + follow.id)
            .then(res => res.json())
            .then(follow => {
              followP.innerHTML = follow.artist.name;
              artistDiv.appendChild(followP);
              main.appendChild(followDiv);
              let unfollowBtn = document.createElement("button");
              unfollowBtn.innerHTML = "Unfollow";
              unfollowBtn.classList.add(
                "uk-button",
                "uk-button-danger",
                "demo"
              );
              unfollowBtn.dataset.id = follow.id;
              unfollowBtn.addEventListener("click", unfollowArtist);
              artistDiv.appendChild(unfollowBtn);
              followDiv.appendChild(artistDiv);
              main.appendChild(followDiv);
            });
        });
      }
    });

  //Fetch Festivals
  fetch("http://localhost:3000/users/" + currentUser.id)
    .then(res => res.json())
    .then(user => {
      let reservationDiv = document.createElement("div");
      let following = document.createElement("h4");
      following.innerHTML = `${currentUser.username} is attending`;
      reservationDiv.appendChild(following);

      if (user.reservations) {
        user.reservations.forEach(function(reservation) {
          let festivalDiv = document.createElement("div");
          let reservationP = document.createElement("p");

          fetch("http://localhost:3000/reservations/" + reservation.id)
            .then(res => res.json())
            .then(reservation => {
              reservationP.innerHTML = reservation.festival.name;
              festivalDiv.appendChild(reservationP);
              main.appendChild(reservationDiv);
              let unattendBtn = document.createElement("button");
              unattendBtn.innerHTML = "Cancel";
              unattendBtn.classList.add(
                "uk-button",
                "uk-button-danger",
                "demo"
              );
              unattendBtn.dataset.id = reservation.id;
              unattendBtn.addEventListener("click", removeFestival);
              festivalDiv.appendChild(unattendBtn);
              reservationDiv.appendChild(festivalDiv);
              main.appendChild(reservationDiv);
            });
        });
      }
    });

  console.log(currentUser);
}

//Fetch Festivals

function followArtist(event) {
  let toggleFollow = event.target;

  const newFollow = {
    user_id: currentUser.id,
    artist_id: event.target.dataset.id
  };
  fetch("http://127.0.01:3000/follows", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newFollow)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      toggleFollow.classList.remove("uk-button-primary");
      toggleFollow.classList.add("uk-button-danger");
      toggleFollow.innerHTML = "FOLLOWING";
    });

  console.log(event.target);
}

function showFestivalPage(event) {
  scrollWin();

  let jumbotron = document.querySelector(".test");
  jumbotron.style.display = "block";
  let main = document.querySelector(".artists");
  main.style.height = "500px";

  fetch("http://localhost:3000/festivals/" + event.target.dataset.id)
    .then(res => res.json())
    .then(festival => {
      //Jumbotron

      let jumbotron = document.querySelector(".test");
      jumbotron.innerHTML = "";
      main.innerHTML = "";
      main.classList.add("uk-container");
      jumbotron.style.backgroundImage = `url(${festival.image})`;
      jumbotron.style.backgroundSize = "100%";
      jumbotron.classList.add("uk-container");

      //Festival Info div
      let festivalInfo = document.createElement("div");
      festivalInfo.style.textAlign = "center";

      //Festival Name
      let name = document.createElement("h1");
      name.innerHTML = festival.name;
      //Festival Description
      let description = document.createElement("p");
      description.innerHTML = festival.description;
      //Festival Date
      let date = document.createElement("p");
      date.innerHTML = festival.date;
      //Festival Location
      let location = document.createElement("p");
      location.innerHTML = festival.location;

      //Headliners
      let headLinerDiv = document.createElement("div");
      let grid = document.createAttribute("uk-grid");
      headLinerDiv.setAttributeNode(grid);
      headLinerDiv.style.display = "inline-block";
      headLinerDiv.classList.add("uk-align-center");

      let headliner = document.createElement("h3");
      headliner.innerHTML = `Performing at ${festival.name}`;
      headLinerDiv.appendChild(headliner);

      festival.artists.forEach(artist => {
        let artistSet = document.createElement("div");
        let artistImg = document.createElement("img");
        artistSet.style.display = "inline-block";
        artistSet.style.height = "400px";
        artistSet.style.width = "400px";
        artistImg.src = artist.image;
        artistSet.appendChild(artistImg);

        let artistName = document.createElement("a");
        artistName.innerHTML = artist.name;
        artistName.dataset.id = artist.id;
        artistName.addEventListener("click", showArtistPage);
        artistSet.appendChild(artistName);

        headLinerDiv.appendChild(artistSet);
      });

      //Reservation Btn
      let reserveBtn = document.createElement("button");
      reserveBtn.innerHTML = "Going?";
      reserveBtn.classList.add("uk-button", "uk-button-primary", "demo");
      reserveBtn.dataset.id = festival.id;
      reserveBtn.setAttribute("type", "button");
      reserveBtn.setAttribute(
        "onclick",
        `UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> You are going to ${festival.name}'})`
      );
      reserveBtn.addEventListener("click", attendFestival);

      festivalInfo.appendChild(name);
      festivalInfo.appendChild(date);
      festivalInfo.appendChild(location);
      festivalInfo.appendChild(description);
      festivalInfo.appendChild(reserveBtn);

      festivalInfo.appendChild(headLinerDiv);

      main.appendChild(festivalInfo);
    });
  console.log("Working");
}

function attendFestival(event) {
  let toggleAttend = event.target;

  const newAttend = {
    user_id: currentUser.id,
    festival_id: event.target.dataset.id
  };
  fetch("http://127.0.01:3000/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newAttend)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      toggleAttend.classList.remove("uk-button-primary");
      toggleAttend.classList.add("uk-button-danger");
      toggleAttend.innerHTML = "I'M GOING!";
    });

  console.log(event.target);
}

function unfollowArtist(event) {
  fetch("http://localhost:3000/follows/" + event.target.dataset.id, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      event.target.parentElement.remove();
    })
    .catch(err => console.log(err));
  console.log(event.target);
}

function removeFestival(event) {
  fetch("http://localhost:3000/reservations/" + event.target.dataset.id, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      event.target.parentElement.remove();
    })
    .catch(err => console.log(err));
  console.log(event.target);
}

function editUser(event) {
  event.preventDefault();
  let edit = document.querySelector(".toggleEdit");
  edit.style.display = "block";

  let newName = document.querySelector("#edit-name");
  newName = newName.value;

  let newRegion = document.querySelector("#region-select");
  newRegion = newRegion.value;

  fetch("http://127.0.0.1:3000/users/" + currentUser.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: newName,
      region: newRegion
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      currentUser.username = data.username;
      currentUser.region = data.region;
      showUserPage();
    });

  console.log("submitting");
}

function deleteUser(event) {
  fetch("http://127.0.0.1:3000/users/" + currentUser.id, { method: "DELETE" })
    .then(res => res.json())
    .then(res => {
      console.log("Deleted:", res);
      currentUser = {
        username: "",
        image: "",
        region: "",
        id: ""
      };

      generateLogin();

      return res;
    });
}

function scrollWin() {
  window.scrollTo(500, 0);
}
