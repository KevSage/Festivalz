
// Implement Scroll to top 

document.addEventListener('DOMContentLoaded', (event) => {
    // allArtists(event)
    // generateUserPage(event)
       generateLogin(event)
       let artistLink = document.querySelector('#artists-link')
       artistLink.addEventListener('click', allArtists)

       let festivalLink = document.querySelector('#festivals-link')
       festivalLink.addEventListener('click', allFestivals)
})
let user = {
    "username": "",
    "image": "",
    "region": ""
}

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
    let main = document.querySelector('.test')
    let artists = document.querySelector('.artists')
    // artists.innerHTML = ""
    main.innerHTML = ""
    main.style.backgroundImage = "url('https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/04-22-16_DPV_6412_Sweetwater_420_Fest_Disco_Biscuits_by_Dave_Vann.jpg')";
    main.style.height = "500px"
    artists.innerHTML = ""
 fetch("http://localhost:3000/artists")
    .then(res => res.json())
    .then(data => {
        data.forEach(function(artist) {
            let artistCard = document.createElement('div')
            artistCard.classList.add("uk-card")
            artistCard.classList.add("uk-card-default")
            artistCard.classList.add("uk-grid-small")
            artistCard.classList.add("uk-child-width-expand@s")
            artistCard.classList.add("uk-text-center")
            artistCard.style.display = "inline"



            let artistMedia = document.createElement('div')
            artistMedia.classList.add("uk-card-media-top")
            artistMedia.classList.add("uk-parallax")
            artistMedia.classList.add("uk-align-center")


            let artistBody = document.createElement('div')
            artistBody.classList.add("uk-card-body")


            let name = document.createElement('a')
            name.innerHTML = artist.name
            name.addEventListener('click', showArtistPage)
            name.dataset.id = artist.id
            

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

function allFestivals(event) {
    event.preventDefault()
    let main = document.querySelector('.test')
    let artists = document.querySelector('.artists')
    main.innerHTML = ""
    main.style.backgroundImage = "url('https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/04-22-16_DPV_6412_Sweetwater_420_Fest_Disco_Biscuits_by_Dave_Vann.jpg')";
    main.style.height = "500px"
    artists.innerHTML = ""
 fetch("http://localhost:3000/festivals")
    .then(res => res.json())
    .then(data => {
        data.forEach(function(festival) {
            let festivalCard = document.createElement('div')
            festivalCard.classList.add("uk-card")
            festivalCard.classList.add("uk-card-default")
            festivalCard.classList.add("uk-grid-small")
            festivalCard.classList.add("uk-child-width-expand@s")
            festivalCard.classList.add("uk-text-center")
            festivalCard.style.display = "inline"
            festivalCard.style.width = "40%"



            let festivalMedia = document.createElement('div')
            festivalMedia.classList.add("uk-card-media-top")
            festivalMedia.classList.add("uk-parallax")
            festivalMedia.classList.add("uk-align-center")


            let festivalBody = document.createElement('div')
            festivalBody.classList.add("uk-card-body")


            let name = document.createElement('a')
            name.innerHTML = festival.name
            name.addEventListener('click', showFestivalPage)
            name.dataset.id = festival.id
            

            let img = document.createElement('img')
            img.src = festival.image
            img.width = 600;
            
            festivalMedia.appendChild(img)

 
            let description = document.createElement('p')
            description.innerHTML = festival.description

            let date = document.createElement('p')
            date.innerHTML = festival.date

            let location = document.createElement('p')
            location.innerHTML = festival.location

            let ticket = document.createElement('p')
            ticket.innerHTML = festival.ticket_price
            
            let allFestivals = document.querySelector('.artists')

            
            festivalBody.appendChild(name)
            festivalBody.appendChild(description)
            festivalBody.appendChild(date)
            festivalBody.appendChild(location)
            festivalBody.appendChild(ticket)


            festivalMedia.appendChild(img)

            festivalCard.appendChild(festivalMedia)
            festivalCard.appendChild(festivalBody)
            festivalCard.style.marginBottom = "50px"
            allFestivals.appendChild(festivalCard)


       })
       
    }
    )
}


function showArtistPage(event) {
    let main = document.querySelector('.artists')
    main.style.height = "500px"
    fetch("http://localhost:3000/artists/" + event.target.dataset.id)
    .then(res => res.json())
    .then(artist => {
        
        //jumbotron
        
        //Artist Name
        let name = document.createElement('h1')
        name.innerHTML = artist.name   
        //Upcoming Performances 
        let performanceDiv = document.createElement('div')
        performanceDiv.style.display = "inline"
        let upcoming = document.createElement('h3')
        upcoming.innerHTML = `${artist.name}'s Upcoming Performances`
        performanceDiv.appendChild(upcoming)

        artist.festivals.forEach(function(festival) { 
            //jumbotron
           let jumbotron = document.querySelector('.test')
           jumbotron.innerHTML = ''
           main.innerHTML = ''
           main.classList.add('uk-container')
           main.style.textAlign = "center"

           jumbotron.style.backgroundImage = `url(${artist.image})`;
           jumbotron.style.backgroundSize = "100%"
           jumbotron.classList.add('uk-container')

           //Festival Div
           let festivalDiv = document.createElement('div')
           festivalDiv.style.display = "inline-block"
           festivalDiv.style.width = "40%"
           festivalDiv.style.padding = "20px"

           //Festival Info
           let festivalPic = document.createElement('img')
           festivalPic.style.height = "350px"
           festivalPic.src = festival.image
           let performance = document.createElement('h4')
           performance.innerHTML = festival.name
           let date = document.createElement('p')
           date.innerHTML = festival.date
           let venue = document.createElement('p')
           venue.innerHTML = festival.location
           let price = document.createElement('p')
           price.innerHTML = `Tickets: $${festival.ticket_price}`
           let reserveBtn = document.createElement('button')
           reserveBtn.classList.add('uk-button-primary', 'uk-button')
           reserveBtn.innerHTML = "I'm Going!"
           main.appendChild(performanceDiv)

           //Event Listeners
           reserveBtn.addEventListener('click', followArtist)
           reserveBtn.addEventListener('click', showFestival)
           performanceDiv.appendChild(festivalDiv)
        //    performanceDiv.appendChild(upcoming)
           festivalDiv.appendChild(festivalPic)
           festivalDiv.appendChild(performance)
           festivalDiv.appendChild(venue)
           festivalDiv.appendChild(date)
           festivalDiv.appendChild(price)
           festivalDiv.appendChild(reserveBtn)

        })
        debugger

        console.log(artist.performances)
    })

}

function createUser(event) {
    event.preventDefault()
    let pic = []
    let newName = event.target.querySelector("#newUserName")
    let userName = newName.value 
    let regionOption = event.target.querySelector("#regionOption")
    let userRegion = regionOption.value 
    
    user.username = userName
    user.region = userRegion
    let blah = fetchPic()
    // debugger

    // console.log(newPic)
    // const newUser = {
    //     "username": userName,
    //     "image": newPic,
    //     "region": userRegion
    // }

    // fetch("http://127.0.0.1:3000/users", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newUser)
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log(data)

    //     debugger
    // })
    
}

function postUserData() {
    const newUser = {
        "username": user.username,
        "image": user.image,
        "region": user.region
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
}

function fetchPic() {
    let userPic = []
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
        let userData = data['results']
        userData = userData[0]
        let pictures = userData.picture
        let pics = Object.values(pictures)
        console.log(pics[2])
        user.image = pics[2]
        postUserData()
    })
}

function followArtist() {

}

function showFestivalPage() {
    
}
