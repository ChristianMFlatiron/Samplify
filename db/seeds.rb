# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Instrument.destroy_all
Discipline.destroy_all

user1 = User.create(profile_imageUrl: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/78/78e7dd7f68289cb914dfd5ec7218f9161ee830fc_full.jpg",username: "Rockpotato", password_digest: "chillin", first_name: "Carl", last_name: "Barker")

user2 = User.create(profile_imageUrl:"https://pngset.com/images/punk-rock-colorful-girl-poster-punk-rock-hair-haircut-person-human-transparent-png-355894.png", username: "Flavortune", password_digest: "apple", first_name: "Alex", last_name: "English")

Instrument.create(
instrument_imageUrl:"https://toppng.com/uploads/preview/acoustic-classic-guitar-11530935734ygj1np8m01.png",
instrument_name: "Acoustic Guitar",
instrument_description:"Acoustic Guitar, from Classical Nylon stringed, to metal stringed Acoustic Guitars."
)


Instrument.create(
instrument_imageUrl:"https://toppng.com/uploads/preview/electric-guitar-11530937008gqwe1aygab.png",
instrument_name: "Electric Guitar",
instrument_description:"Amplify your sound with an Electric guitar. From Rock to Jazz."
)

Instrument.create(
instrument_imageUrl:"https://www.pikpng.com/pngl/m/290-2902633_transparent-drum-set-transparent-background-drum-set-high.png",
instrument_name: "Drums",
instrument_description:"The pounding heart of any band. The drums that make everyone begin to tap their feet."
)

Instrument.create(
instrument_imageUrl:"https://pngset.com/images/guitar-strings-ibanez-mikro-bass-purple-leisure-activities-musical-instrument-bass-guitar-transparent-png-1404560.png",
instrument_name: "Bass",
instrument_description:"The steady foundation that wraps the band in a body of deep tones."
)

Instrument.create(
instrument_imageUrl:"https://p7.hiclipart.com/preview/575/305/250/electronic-musical-instruments-keyboard-casio-music-workstation-piano-keys.jpg",
instrument_name: "Keyboard",
instrument_description:"The keyboard can make sound effects and musical effects from a wide variety of sounds that come prebuilt, or some via software."
)

Instrument.create(
instrument_imageUrl:"https://americansongwriter.com/gear-guides/wp-content/uploads/sites/2/2021/03/Best-Vocal-Microphones-as1-1-1.jpg?fit=710%2C476",
instrument_name: "Vocals",
instrument_description:"For the singers out there looking to partner up or join and collab with others. "
)

Discipline.create(
    discipline_imageUrl:"https://image.similarpng.com/very-thumbnail/2021/07/Rock-n-roll-hand-on-transparent-background-PNG.png",
    discipline_name:"Rock",
    discipline_description:"From Rock and Roll, to Punk, to Metal, Rock has it all."
)
Discipline.create(
    discipline_imageUrl:"https://www.pngfind.com/pngs/m/374-3745851_new-orleans-heritage-festival-jazz-music-png-transparent.png",
    discipline_name:"Jazz",
    discipline_description:"The improvisationally inclined, Jazz is where notes go for a ride. "
)
Discipline.create(
    discipline_imageUrl:"https://www.pikpng.com/pngl/m/210-2102870_pop-music-png-transparent-pop-music-logo-clipart.png",
    discipline_name:"Pop",
    discipline_description:"For those inclined to feature a collage of sound and fast catchy beats. "
)
Discipline.create(
    discipline_imageUrl:"https://www.gramophone.co.uk/media/197132/beethoven-free-cropped_3.jpg?anchor=center&mode=crop&width=960&height=640&rnd=132213281150000000",
    discipline_name:"Classical",
    discipline_description:"It is music that has been composed by musicians who are trained in the art of writing music (composing) and written down in music notation so that other musicians can play it. "
)
Discipline.create(
    discipline_imageUrl:"https://www.pngfind.com/pngs/m/92-925552_cowboy-hat-transparent-background-cowboy-hat-transparent-kids.png",
    discipline_name:"Country",
    discipline_description:"music derived from or imitating the folk style of the Southern U.S. or of the Western cowboy"
)
Discipline.create(
    discipline_imageUrl:"https://p7.hiclipart.com/preview/354/925/65/electronic-dance-music-tech-house-graphic-design-dynamite-jacksin-music-dj.jpg",
    discipline_name:"Electronic ",
    discipline_description:"Electronic music is music that employs electronic musical instruments, digital instruments, or circuitry-based music technology in its creation. It includes both music made using electronic and electromechanical means"
)