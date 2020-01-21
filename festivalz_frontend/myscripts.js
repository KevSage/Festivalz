
document.addEventListener('DOMContentLoaded', (event) => {
    random(event)
})



function random(event) {
    event.preventDefault()

 fetch("http://localhost:3000/artists")
    .then(res => res.json())
    .then(data => {
        data.forEach(function(artist) {
            let spotify = artist.spotify
            let playlist = document.querySelector('.playlist')
            playlist.innerHTML = spotify
            let card = document.querySelector('.list')
            let name = document.createElement('h1')
            name.innerHTML = artist.name
            let img = document.createElement('img')
            img.src = artist.image
            let bio = document.createElement('p')
            bio.innerHTML = artist.bio
            card.appendChild(name)
            card.appendChild(img)
            card.appendChild(bio)

            
            debugger

       })
    }
    )
}