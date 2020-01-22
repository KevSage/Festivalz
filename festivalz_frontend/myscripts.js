
document.addEventListener('DOMContentLoaded', (event) => {
    // allArtists(event)
    // generateUserPage(event)
       generateLogin(event)
})

function generateLogin(event) {
   event.preventDefault
   let main = document.querySelector('.test')
   main.style.backgroundImage = "url('https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/04-22-16_DPV_6412_Sweetwater_420_Fest_Disco_Biscuits_by_Dave_Vann.jpg')";
   main.style.height = "500px"

   let loginForm = document.createElement('form')
   loginForm.classList.add("uk-form-custom")
   let loginFieldset = document.createElement('FIELDSET')
   loginFieldset.classList.add("uk-fieldset")
   let loginLegend = document.createElement('legend')
   loginLegend.classList.add("uk-legend")
   loginLegend.innerHTML = "Login"
   loginLegend.style.color = "white"
   let loginDiv = document.createElement('div')
   loginDiv.classList.add("uk-margin")
   let loginInput = document.createElement('input')
   let loginButton = document.createElement('button')
   loginButton.innerHTML = "Login"
   loginButton.classList.add("uk-button", "uk-button-default")
   loginButton.style.color = "white"
   loginInput.classList.add('uk-input', 'uk-form-width-medium')
   let register = document.createElement('a')
   register.innerHTML = "Sign up now!"
   register.addEventListener('click', registerUser)
   register.style.marginLeft = "30px"
   register.style.color = "30px"

   loginFieldset.appendChild(loginLegend)
   loginFieldset.appendChild(loginDiv)
   loginDiv.appendChild(loginInput)
   loginDiv.appendChild(loginButton)
   loginDiv.appendChild(register)
   loginForm.appendChild(loginFieldset)
   main.appendChild(loginForm)

}

function registerUser(event) {
    event.preventDefault()
    let main = document.querySelector('.test')
    main.innerHTML = ""

   //Create Form
    let registerForm = document.createElement('form')
   registerForm.addEventListener('submit', createUser)
   registerForm.classList.add("uk-form-stacked")
   //Form<Fieldset
   let registerFieldset = document.createElement('FIELDSET')
   registerFieldset.classList.add("uk-fieldset")

   let registerDiv = document.createElement('div')
   registerDiv.classList.add("uk-margin")

   //Form<Fieldset<Username
   let nameInput = document.createElement('input')
   nameInput.setAttribute('id', 'newUserName')
   nameInput.classList.add('uk-input', 'uk-form-width-medium')
   nameInput.placeholder = "Enter Username"

   //Form<Fieldset<Region Div
   let regionDiv = document.createElement('div')
   regionDiv.classList.add('uk-margin')
   //Region Select
   let regionSelect = document.createElement('select')
   regionSelect.classList.add('uk-select')
   regionSelect.setAttribute('id', 'regionOption')
   //Form<Fieldset<RegionDiv<RegionSelect<Region Options
   let regionOption1 = document.createElement('option')
   regionOption1.innerHTML = "Southeast"
   let regionOption2 = document.createElement('option')
   regionOption2.innerHTML = "Northeast"
   let regionOption3 = document.createElement('option')
   regionOption3.innerHTML = "Midwest"
   let regionOption4 = document.createElement('option')
   regionOption4.innerHTML = "West Coast"
   let regionOption5 = document.createElement('option')
   regionOption5.innerHTML = "Southwest"
   //Append Region
   regionSelect.appendChild(regionOption1)
   regionSelect.appendChild(regionOption2)
   regionSelect.appendChild(regionOption3)
   regionSelect.appendChild(regionOption4)
   regionSelect.appendChild(regionOption5)
   
   //Append Button
   let registerButton = document.createElement('button')
   registerButton.innerHTML = "Register"
   registerButton.classList.add("uk-button", "uk-button-default")
   registerButton.style.color = "white"
   regionDiv.appendChild(regionSelect)
  
//    registerDiv.appendChild(usernameLabel)
   registerFieldset.appendChild(registerDiv)
   registerDiv.appendChild(nameInput)
   registerDiv.appendChild(regionDiv)
   registerDiv.appendChild(registerButton)
   registerForm.appendChild(registerFieldset)
   main.appendChild(registerForm)
  

}


function generateUserPage() {
  let main = document.querySelector('.test')
  main.innerHTML = ""
  let container = document.createElement('div')
  container.classList.add("uk-height-large")
  container.classList.add("uk-background-cover")
  container.classList.add("uk-light")
  container.classList.add("uk-flex")
  container.style.backgroundImage = "url('https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/04-22-16_DPV_6412_Sweetwater_420_Fest_Disco_Biscuits_by_Dave_Vann.jpg')";
  container.setAttribute("uk-parallax", "bgy: -10");
  main.appendChild(container)
  generateFestivals(event)
}

function generateFestivals() {
  
}
function allArtists(event) {
    event.preventDefault()

 fetch("http://localhost:3000/artists")
    .then(res => res.json())
    .then(data => {
        data.forEach(function(artist) {
            let artistCard = document.createElement('div')
            artistCard.classList.add("uk-card")
            artistCard.classList.add("uk-card-default")
            artistCard.classList.add("uk-grid-small")


            let artistMedia = document.createElement('div')
            artistMedia.classList.add("uk-card-media-top")
            artistMedia.classList.add("uk-parallax")
            artistMedia.classList.add("uk-align-center")


            let artistBody = document.createElement('div')
            artistBody.classList.add("uk-card-body")


            let name = document.createElement('h1')
            name.innerHTML = artist.name

            let img = document.createElement('img')
            img.src = artist.image
            img.width = 600;
            
            artistMedia.appendChild(img)

 
            let bio = document.createElement('p')
            bio.innerHTML = artist.bio

            let iframe = document.createElement('iframe')
            let spotify = artist.spotify
            iframe.src = spotify
            
            let allArtists = document.querySelector('.artists')

            
            artistBody.appendChild(name)
            artistBody.appendChild(bio)
            artistBody.appendChild(iframe)

            artistMedia.appendChild(img)

            artistCard.appendChild(artistMedia)
            artistCard.appendChild(artistBody)
            artistCard.style.marginBottom = "50px"
            allArtists.appendChild(artistCard)


       })
       
    }
    )
}

function createUser(event) {
    event.preventDefault()
    let pic = []
    let newName = event.target.querySelector("#newUserName")
    let username = newName.value 
    let regionOption = event.target.querySelector("#regionOption")
    let userRegion = regionOption.value 
    
    let newPic= fetchPic()
    debugger
    console.log(newPic)
    const newUser = {
        "username": username,
        "image": newPic,
        "region": userRegion
    }

    fetch("http://127.0.0.1:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        debugger
    })
    //Add User to DB

    //Fetch User Pic
   
    // console.log("Created User")
    
}

function fetchPic() {
    let userPic = []
    fetch("https://randomuser.me/api/")
    .then((response) => {
      return response.json();
    })
    .then(function(data) {
        let userData = data['results']
        userData = userData[0]
        let pictures = userData.picture
        let pics = Object.values(pictures)
        console.log(pics[2])
        return pics[2]

    })
}

