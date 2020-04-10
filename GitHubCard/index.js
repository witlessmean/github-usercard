/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https:api.github.com/users/witlessmean")
  .then((response) => {
    containerInHTML.appendChild(cardCreator(response));
    console.log(response);

    return response;
  })
  .catch((error) => {
    console.log("the data was not returned", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

function cardCreator(githubInfo) {
  ///////// Element creation ///////////////

  const cardsContainer = document.createElement("div"),
    userImg = document.createElement("img"),
    cardInfo = document.createElement("div"),
    userName = document.createElement("h3"),
    usersUserName = document.createElement("p"),
    location = document.createElement("p"),
    linkContainer = document.createElement("p"),
    link = document.createElement("a"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");

  /////// Element class addition /////////

  cardsContainer.classList.add("card");
  cardInfo.classList.add("card-info");
  userName.classList.add("name");
  usersUserName.classList.add("username");

  ///////// addition of content //////////

  userImg.src = githubInfo.data.avatar_url;
  userName.textContent = githubInfo.data.name;
  usersUserName.textContent = githubInfo.data.login;
  location.textContent = githubInfo.data.location;
  link.href = "https://github.com/witlessmean";
  link.textContent = githubInfo.data.html_url;
  followers.textContent = githubInfo.data.followers;
  following.textContent = githubInfo.data.following;
  bio.textContent = githubInfo.data.bio;

  ////////// append items /////////////

  cardsContainer.appendChild(userImg);
  cardsContainer.appendChild(cardInfo);
  cardsContainer.appendChild(userName);
  cardsContainer.appendChild(usersUserName);
  cardsContainer.appendChild(location);
  cardsContainer.appendChild(linkContainer);
  linkContainer.appendChild(link);
  cardsContainer.appendChild(followers);
  cardsContainer.appendChild(following);
  cardsContainer.appendChild(bio);

  
  
  return cardsContainer;
}

const containerInHTML = document.querySelector(".cards");

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "DustinG98",
  "dcdavis3920",
  "kkslider2130",
  "ajablanco",
  "dalgobbopat"
];

followersArray.forEach((user) => {
  axios.get(`https://api.github.com/users/${user}`).then((response) => {
    containerInHTML.appendChild(cardCreator(response));
  });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

//const classDiv = document.querySelector("div.card")

 containerInHTML.addEventListener("mouseover", () => {
   containerInHTML.style.transform = "scale(1.1)";
   containerInHTML.style.transition = "transform 1s";
 });

 containerInHTML.addEventListener("mouseleave", () => {
   containerInHTML.style.transform = "scale(1)";
   containerInHTML.style.transition = "transform 1s";
 });
