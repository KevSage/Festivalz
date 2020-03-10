# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'json'


#Create Artists

Artist.create(name: "Wiz Kalifa", image: "https://www.usmagazine.com/wp-content/uploads/2019/04/Childish-Gambino-Wiz-Khalifa-and-More-Celebs-Who-Paid-Tribute-to-Nispey-Hustle-02.jpg?w=1200", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/album/2bwyHN2Y9iljWbUZYPXMrC')
Artist.create(name: "Kanye West", image: "https://api.time.com/wp-content/uploads/2017/01/kanye-west-college-course.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/album/5K4W6rqBFWDnAN6FQUkS6x')
Artist.create(name: "Post Malone", image: "https://www.youredm.com/wp-content/uploads/2018/06/20180603-DSC05713-1024x770.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/album/4g1ZRSobMefqF6nelkgibi')
Artist.create(name: "Ariana Grande", image: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/06/14/arianagrande0608u.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Pop", spotify:'https://open.spotify.com/embed/album/2fYhqwDWXjbpjaIJPEfKFw')
Artist.create(name: "Billie Eilish", image: "https://editorial01.shutterstock.com/wm-preview-1500/10215405f/aeea68a4/2019-coachella-music-and-arts-festival-weekend-2-day-2-indio-usa-shutterstock-editorial-10215405f.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Pop", spotify:'https://open.spotify.com/embed/album/0S0KGZnfBGSIssfF54WSJh')
Artist.create(name: "Khalid", image: "https://www.theprospectordaily.com/wp-content/uploads/2017/05/NDMF2_2.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "R&B", spotify:'https://open.spotify.com/embed/album/6KT8x5oqZJl9CcnM66hddo')
Artist.create(name: "Drake", image: "https://cmga360music.files.wordpress.com/2015/10/jwj-2015-acl-fest-202488.jpg?w=1024&h=707", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/album/1ATL5GLyefJaxhQzSPVrLX')
Artist.create(name: "Travis Scott", image: "https://cdn.vox-cdn.com/thumbor/gWz-WZ8LkZeygUj5WO4CPJiAC-0=/0x0:700x467/1520x1013/filters:focal(347x150:459x262):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65676776/j2aojjir8i2m3okns7ib.0.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Pop", spotify:'https://open.spotify.com/embed/album/1Sf8GsXG32t0jNrX11xqWx')
Artist.create(name: "Ed Sheeran", image: "http://cdn01.cdn.justjared.com/wp-content/uploads/2014/08/sheeran-vfest/ed-sheeran-v-festival-performance-sing-13.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/6eUKZXaKkcviH0Ku9w2n3V')
Artist.create(name: "Taylor Swift", image: "https://thenypost.files.wordpress.com/2019/09/taylor-swift-lover.jpg?quality=90&strip=all&w=1236&h=820&crop=1", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Pop", spotify:'https://open.spotify.com/embed/artist/06HL4z0CvFAxyc27GXpf02')
Artist.create(name: "Halsey", image: "https://i0.wp.com/sightofsound.live/wp-content/uploads/2015/08/mattchristinephotography-317.jpg?fit=4781%2C2178&ssl=1", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Pop", spotify:'https://open.spotify.com/embed/artist/26VFTg2z8YR0cCuwLzESi2')
Artist.create(name: "Cardi B", image: "https://consequenceofsound.net/wp-content/uploads/2019/02/cardi-b-at-the-grammys.png", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/4kYSro6naA4h99UJvo89HB')
Artist.create(name: "Panic! At the Disco", image: "https://images.kerrangcdn.com/panic_at_the_disco-the_sse_hydro-glasgow-ryanjohnstonco-24.jpg?auto=compress&fit=crop&w=2016&h=1134", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/20JZFwl6HVl6yg8a4H3ZqK')
Artist.create(name: "DaBaby", image: "https://3q87le1gsko01ibim33e4wib-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/dababy3_astroworld19_greg-noire.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/4r63FhuTkUYltbVAg5TQnk')
Artist.create(name: "Shawn Mendes", image: "http://frontrowctr.com/wp-content/uploads/2018/10/10.14_Shawn-Mendes_by-Sydney-Gawlik_ACL2018_SG-14__G__7755.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/7n2wHs1TKAczGzO7Dd2rGr')
Artist.create(name: "Lizzo", image: "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/11/gettyimages-1187033031-h_2019.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/56oDRnqbIiwx4mymNEv7dS')
Artist.create(name: "Meek Mill", image: "https://www.pennlive.com/resizer/WrggU4uZ39qWk_8vTSgVJ88B2Mw=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/WMBXRRAV7BDLNGERPUVHKTGEIU.JPG", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/20sxb77xiYeusSH8cVdatc')
Artist.create(name: "A Boogie Wit da Hoodie", image: "https://i.ytimg.com/vi/4opu1srPXbc/maxresdefault.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/31W5EY0aAly4Qieq6OFu6I')
Artist.create(name: "Chris Brown", image: "http://media1.s-nbcnews.com/i/streams/2013/October/131006/8C9293963-131006-chris-brown.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/7bXgB6jMjp9ATFy66eO08Z')
Artist.create(name: "J. Cole", image: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fogdenpayne%2Ffiles%2F2018%2F08%2Fcole2.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/6l3HvQ5sa6mXTsMTB19rO5')
Artist.create(name: "Imagine Dragons", image: "https://www.billboard.com/files/media/imagine-dragons-kaaboo-2018-alivecoverage-billboard-1548.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/53XhwfbYqKCa1cC15pYq2q')
Artist.create(name: "21 Savage", image: "https://www.wkrn.com/wp-content/uploads/sites/73/2019/02/AP_17246793999569_1549229301411_70257323_ver1.0.jpg?w=1280&h=720&crop=1", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/1URnnhqYAYcrqrcwql10ft')
Artist.create(name: "Bad Bunny", image: "https://static.billboard.com/files/media/bad-bunny-Calibash-Los-Angeles-2018-Show-billboard-1548.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/4q3ewBCX7sLwd24euuV69X')
Artist.create(name: "Lady Gaga", image: "https://socialitelife.com/wp-content/uploads/2019/10/lady-gaga-main-10182019.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/1HY2Jd0NmPuamShAr6KMms')
Artist.create(name: "Maroon 5", image: "https://townsquare.media/site/724/files/2018/01/GettyImages-460395372-e1517313775752.jpg?w=980&q=75", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/04gDigrS5kc9YWfZHwBETP')
Artist.create(name: "Swae Lee", image: "https://www.rollingstone.com/wp-content/uploads/2018/12/Swae-Lee-2018-Swae-Lee-Had-a-Good-Year.jpg?resize=1800,1200&w=1800", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/1zNqQNIdeOUZHb8zbZRFMX')
Artist.create(name: "Camila Cabella", image: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/DBqgNPxfaRo2gaqhjHxL5gzm9EE=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/J4FECOAKLVHFBDPETPIBL36EWE.JPG", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/4nDoRrQiYLoBzwC5BhVJzF')
Artist.create(name: "Bruno Mars", image: "https://pmcvariety.files.wordpress.com/2016/02/bruno-mars.jpg?w=1000&h=563&crop=1", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/0du5cEVh5yTK9QJze8zA0C')
Artist.create(name: "Young Thug", image: "https://cdn2.thelineofbestfit.com/images/made/images/remote/https_cdn2.thelineofbestfit.com/galleries/2014/YoungThug-BumbershootFestival-090118-LauraHarvey-19_1290_861_90.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/50co4Is1HCEo8bhOyUWKpn')
Artist.create(name: "Ella Mai", image: "https://www.theculturesupplier.com/wp-content/uploads/2017/05/425A7271-1-1024x683.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/7HkdQ0gt53LP4zmHsL0nap')
Artist.create(name: "Normani", image: "https://d.newsweek.com/en/full/1520838/normani-performs-osheaga-music-art-festival-parc-jean-drapeau-august-04-2019-montreal.jpg", bio: Faker::Lorem.paragraph(sentence_count: 20), genre: "Hip-Hop", spotify:'https://open.spotify.com/embed/artist/2cWZOOzeOm4WmBJRnD5R7I')


#Create Festivals
Festival.create(name: "Babylon Festival", image:"https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Sunfest-Editorial-2.jpg" , description: Faker::Lorem.paragraph(sentence_count: 5), location: "Miami, FL", region: "Southeast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Trap! Festival", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Openair-Frauenfeld-Editorial-2.jpg", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Atlanta, GA", region: "Southeast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Rolling Loud", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Rolling-Loud-Hero.jpg", description: Faker::Lorem.paragraph(sentence_count: 5), location: "New Orleans, LA" , region: "Southeast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Eden Festival", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Firefly-Editorial-Alive.jpg" , description: Faker::Lorem.paragraph(sentence_count: 5), location: "Chicago, IL" , region: "Midwest", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Mood Festival", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/III-Points-Hero-Pic.jpg", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Minneapolis, MN", region: "Midwest", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Vibez Festival", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/04-22-16_DPV_6412_Sweetwater_420_Fest_Disco_Biscuits_by_Dave_Vann.jpg", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Detroit, MI", region: "Midwest", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "InfraSound Festival", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Global-Dance-Festival-Editorial.jpeg", description: Faker::Lorem.paragraph(sentence_count: 5), location: "New York City, NY", region: "Northeast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Earth Garden Festival", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Vito-Valentinetti-TINALS-2017-34.jpg" , description: Faker::Lorem.paragraph(sentence_count: 5), location: "Washington, DC", region: "Northeast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Sugar Water Festival", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/04-22-16_DPV_6412_Sweetwater_420_Fest_Disco_Biscuits_by_Dave_Vann.jpg", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Philadelphia, PA", region: "Northeast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Tantrum Festival", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/PhxLights2016-6.jpg", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Los Angeles, California", region: "West Coast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Oblivion Festival", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Gulf-Coast-Jam-Editorial.jpg", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Seattle, WA", region: "West Coast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Summer Jam Festival", image: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2014/11/Electric-Forest_Spady03-e1479549070335.jpg", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Portland, OR", region: "West Coast", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Roots Festival", image: "https://philadelphiaweekly.com/wp-content/uploads/2019/10/b76bcd0b1cac573d9a5cc8780b362b81.jpg", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Las Vegas, NV", region: "Southwest", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))
Festival.create(name: "Mystic Festival", image: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/06/21/cb637f30-8dc1-11e9-b2aa-5ba392ab87ab_image_hires_121735.jpg?itok=fvAviEZC&v=1561090671", description: Faker::Lorem.paragraph(sentence_count: 5), location: "Phoenix, AZ", region: "Southwest", date: Faker::Time.forward(days: 120,  period: :evening, format: :long), ticket_price: Faker::Number.within(range: 149..299))

#Create Users
rc = RestClient.get('https://randomuser.me/api/?results=500')
rcArray = JSON.parse(rc)['results']

rcArray.each do |user| 
    pic = user.fetch('picture').values[0]
    region = rand(1..4)
  if region == 1
    region = "Southeast"
  elsif region == 2
    region = "Midwest"
  elsif region == 3
    region = "West Coast"
  else
    region = "Northeast"
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
    Reservation.create(user_id:festival, festival_id:user)
end
