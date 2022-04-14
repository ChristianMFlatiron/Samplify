# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "destroying old database"
Instrument.destroy_all
User.destroy_all
Band.destroy_all
BandOwner.destroy_all
puts "creating users"

puts "creating instruments"
#Instruments
i1 = Instrument.create!(
instrument_imageUrl:"https://toppng.com/uploads/preview/acoustic-classic-guitar-11530935734ygj1np8m01.png",
instrument_name: "Acoustic Guitar",
instrument_description:"Acoustic Guitar, from Classical Nylon stringed, to metal stringed Acoustic Guitars."
)


i2 = Instrument.create!(
instrument_imageUrl:"https://toppng.com/uploads/preview/electric-guitar-11530937008gqwe1aygab.png",
instrument_name: "Electric Guitar",
instrument_description:"Amplify your sound with an Electric guitar. From Rock to Jazz."
)

i3 = Instrument.create!(
instrument_imageUrl:"https://www.pikpng.com/pngl/m/290-2902633_transparent-drum-set-transparent-background-drum-set-high.png",
instrument_name: "Drums",
instrument_description:"The pounding heart of any band. The drums that make everyone begin to tap their feet."
)

i4 = Instrument.create!(
instrument_imageUrl:"https://pngset.com/images/guitar-strings-ibanez-mikro-bass-purple-leisure-activities-musical-instrument-bass-guitar-transparent-png-1404560.png",
instrument_name: "Bass",
instrument_description:"The steady foundation that wraps the band in a body of deep tones."
)

i5 = Instrument.create!(
instrument_imageUrl:"https://p7.hiclipart.com/preview/575/305/250/electronic-musical-instruments-keyboard-casio-music-workstation-piano-keys.jpg",
instrument_name: "Keyboard",
instrument_description:"The keyboard can make sound effects and musical effects from a wide variety of sounds that come prebuilt, or some via software."
)

i6 = Instrument.create!(
instrument_imageUrl:"https://americansongwriter.com/gear-guides/wp-content/uploads/sites/2/2021/03/Best-Vocal-Microphones-as1-1-1.jpg?fit=710%2C476",
instrument_name: "Vocals",
instrument_description:"For the singers out there looking to partner up or join and collab with others. "
)



#Users
u1 = User.create!(profile_imageUrl: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/78/78e7dd7f68289cb914dfd5ec7218f9161ee830fc_full.jpg", username: "Rockpotato", password: "chillin", first_name: "Carl", last_name: "Barker", instrument_id: i1.id)

u2 = User.create!(profile_imageUrl:"https://pngset.com/images/punk-rock-colorful-girl-poster-punk-rock-hair-haircut-person-human-transparent-png-355894.png", username: "Flavortune", password: "apple", first_name: "Alex", last_name: "English", instrument_id: i2.id)

u3 = User.create!(profile_imageUrl: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg", username: "Amphib", password: "amphib", first_name: "Bob", last_name: "Parker", instrument_id: i3.id)

u4 = User.create!(profile_imageUrl: "https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png", username: "Oreo", password: "cookies", first_name: "Adam", last_name: "Ivory", instrument_id: i4.id)

u5 = User.create!(profile_imageUrl: "https://yt3.ggpht.com/ytc/AKedOLQGphkecXGUSo6J3tcdc0zQT7wYITmxA_JDYRp1bw=s900-c-k-c0x00ffffff-no-rj", username: "Partytime", password: "boom", first_name: "Yen", last_name: "Liva", instrument_id: i5.id)

u6 = User.create!(profile_imageUrl: "https://pbs.twimg.com/media/E9udtUmWEAIo7o5.png", username: "TabTech", password: "fret", first_name: "Michael", last_name: "Fin", instrument_id: i6.id)



#Bands
b1 = Band.create!(
    band_name: "Morgoth"
    )

#Band_Owners?


bo1= BandOwner.create!(
    user_id: u1.id,
    band_id: b1.id)