# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'json'


]#Create Artists

Artist.create(name: "Wiz Kalifa", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/album/2bwyHN2Y9iljWbUZYPXMrC' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Kanye West", image: "https://www.billboard.com/files/media/02-kanye-west-performance-june-2016-billboard-1548.jpg", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/album/5K4W6rqBFWDnAN6FQUkS6x' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Post Malone", image: "https://www.youredm.com/wp-content/uploads/2018/06/20180603-DSC05713-1024x770.jpg", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/album/4g1ZRSobMefqF6nelkgibi' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Ariana Grande", image: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/06/14/arianagrande0608u.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Pop", spotify: "<iframe src='https://open.spotify.com/embed/album/2fYhqwDWXjbpjaIJPEfKFw' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Billie Eilish", image: "https://editorial01.shutterstock.com/wm-preview-1500/10215405f/aeea68a4/2019-coachella-music-and-arts-festival-weekend-2-day-2-indio-usa-shutterstock-editorial-10215405f.jpg", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Pop", spotify: "<iframe src='https://open.spotify.com/embed/album/0S0KGZnfBGSIssfF54WSJh' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Khalid", image: "https://www.theprospectordaily.com/wp-content/uploads/2017/05/NDMF2_2.jpg", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "R&B", spotify: "<iframe src='https://open.spotify.com/embed/album/6KT8x5oqZJl9CcnM66hddo' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Drake", image: "https://cmga360music.files.wordpress.com/2015/10/jwj-2015-acl-fest-202488.jpg?w=1024&h=707", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/album/1ATL5GLyefJaxhQzSPVrLX' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Travis Scott", image: "https://cdn.vox-cdn.com/thumbor/gWz-WZ8LkZeygUj5WO4CPJiAC-0=/0x0:700x467/1520x1013/filters:focal(347x150:459x262):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65676776/j2aojjir8i2m3okns7ib.0.jpg", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Pop", spotify: "<iframe src='https://open.spotify.com/embed/album/1Sf8GsXG32t0jNrX11xqWx' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Ed Sheeran", image: "http://cdn01.cdn.justjared.com/wp-content/uploads/2014/08/sheeran-vfest/ed-sheeran-v-festival-performance-sing-13.jpg", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/6eUKZXaKkcviH0Ku9w2n3V' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Taylor Swift", image: "https://thenypost.files.wordpress.com/2019/09/taylor-swift-lover.jpg?quality=90&strip=all&w=1236&h=820&crop=1", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Pop", spotify: "<iframe src='https://open.spotify.com/embed/artist/06HL4z0CvFAxyc27GXpf02' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Halsey", image: "https://i0.wp.com/sightofsound.live/wp-content/uploads/2015/08/mattchristinephotography-317.jpg?fit=4781%2C2178&ssl=1", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Pop", spotify: "<iframe src='https://open.spotify.com/embed/artist/26VFTg2z8YR0cCuwLzESi2' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Cardi B", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/4kYSro6naA4h99UJvo89HB' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Panic! At the Disco", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/20JZFwl6HVl6yg8a4H3ZqK' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "DaBaby", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/4r63FhuTkUYltbVAg5TQnk' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Shawn Mendes", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/7n2wHs1TKAczGzO7Dd2rGr' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Lizzo", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/56oDRnqbIiwx4mymNEv7dS' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Meek Mill", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/20sxb77xiYeusSH8cVdatc' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "A Boogie Wit da Hoodie", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/31W5EY0aAly4Qieq6OFu6I' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Chris Brown", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/7bXgB6jMjp9ATFy66eO08Z' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "J. Cole", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/6l3HvQ5sa6mXTsMTB19rO5' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Imagine Dragons", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/53XhwfbYqKCa1cC15pYq2q' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "21 Savage", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/1URnnhqYAYcrqrcwql10ft' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Bad Bunny", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/4q3ewBCX7sLwd24euuV69X' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Lady Gaga", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/1HY2Jd0NmPuamShAr6KMms' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Maroon 5", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/04gDigrS5kc9YWfZHwBETP' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Swae Lee", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/1zNqQNIdeOUZHb8zbZRFMX' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Camila Cabella", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/4nDoRrQiYLoBzwC5BhVJzF' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Bruno Mars", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/0du5cEVh5yTK9QJze8zA0C' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Young Thug", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/50co4Is1HCEo8bhOyUWKpn' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Ella Mai", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/7HkdQ0gt53LP4zmHsL0nap' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")
Artist.create(name: "Ella Mai", image: "https://imgur.com/gallery/L3dUc", bio: Faker::Lorem.paragraph(sentence_count: 5), genre: "Hip-Hop", spotify: "<iframe src='https://open.spotify.com/embed/artist/2cWZOOzeOm4WmBJRnD5R7I' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>")


#Create Festivals
Festival.create(name: "Babylon Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Miami, FL", region: "Southeast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Trap! Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Atlanta, GA", region: "Southeast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Babylon Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "New Orleans, LA" , region: "Southeast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Eden Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Chicago, IL" , region: "Midwest", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Mood Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Minneapolis, MN", region: "Midwest", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Vibez Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Detroit, MI", region: "Midwest", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "InfraSound Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location:, region: "New York City, NY", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Earth Garden Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location:, region: "Washington, DC", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Sugar Water Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Philadelphia, PA", region: "Northeast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Tantrum Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Los Angeles, California", region: "West Coast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Oblivion Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Seattle, WA", region: "West Coast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Summer Jam Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Portland, OR", region: "West Coast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Roots Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Las Vegas, NV", region: "Southwest", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Mystic Festival", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Phoenix, AZ", region: "Southwest", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))

#Create Users
rc = RestClient.get('https://randomuser.me/api/?results=500')
rcArray = JSON.parse(rc)['results']

rcArray.each do |user| 
    pic = user.fetch('picture').values[2]
    region = rand(1..4)
  if region == 1
    region = "Southeast"
  elsif region == 2
    region = "Midwest"
  elsif region == 3
    region = "West Coast"
  else
    region = "North East"
  end
    
  User.create(username: Faker::Name.first_name, image: pic, region: region)
end

#Create Follows
1000.times do 
    artist = rand(Artist.all.first.id..Artist.all.last.id)
    user = rand(User.all.first.id..User.all.last.id)
    Follow.create(artist_id:artist, user_id:user)
end

#Create Performances
75.times do
  time =  rand(1..12)
  festival = rand(Festival.all.first.id..Festival.all.last.id)
  artist = rand(Artist.all.first.id..Artist.all.last.id)
  Performance.create(artist_id: artist, festival_id:festival, time:time)
end

#Create Reservations
500.times do
    user = rand(User.all.first.id..User.all.last.id)
    festival = rand(Festival.all.first.id..Festival.all.last.id)
    Reservation.create(user_id:artist, festival_id:user)
end
