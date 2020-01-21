
document.addEventListener('DOMContentLoaded', (event) => {
    random(event)
})



function random(event) {
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
            // artistBody.appendChild(iframe)

            artistMedia.appendChild(img)

            artistCard.appendChild(artistMedia)
            artistCard.appendChild(artistBody)
            artistCard.style.marginBottom = "50px"
            allArtists.appendChild(artistCard)


       })
       debugger
    }
    )
}