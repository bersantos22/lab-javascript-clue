// ITERATION 1

// Suspects Array

const suspectsArray = [
  mrGreen = {
firstName: 'Jacob',
lastName: 'Green',
occupation: 'Entrepreneur',
age: 45,
description: 'He has a lot of connections',
image: `https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg`,
color: 'greenmrGreen'
  },

  drOrchid = {
firstName: 'Doctor',
lastName: 'Orchid',
occupation: 'Scientist',
age: 26,
description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
color: 'white'
  },

  profPlum = {
firstName: 'Victor',
lastName: 'Plum',
occupation: 'Designer',
age: 22,
description: 'Billionaire video game designer',
image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
color: 'purple'
  },

missScarlet = {
firstName: 'Kasandra',
lastName: 'Scarlet',
occupation: 'Actor',
age: 31,
description: 'She is an A-list movie star with a dark past',
image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
color: 'red'
},

mrsPeacock = {
firstName: 'Eleanor',
lastName: 'Peacock',
occupation: 'Socialité',
age: 36,
description: 'She is from a wealthy family and uses her status and money to earn popularity',
image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
color: 'blue'
},

mrMustard = {
firstName: 'Jack',
lastName: 'Mustard',
occupation: 'Retired Football player',
age: 62,
description: 'He is a former football player who tries to get by on his former glory',
image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
color: 'yellow'
}
];
//console.log(suspectsArray)
// Rooms Array

const roomsArray = [
room1 = {name: 'Dining Room'},
room2 = {name: 'Conservatory'},
room3 = {name: 'Kitchen'},
room4 = {name: 'Study'},
room5 = {name: 'Library'},
room6 = {name: 'Billiard Room'},
room7 = {name: 'Lounge'},
room8 = {name: 'Ballroom'},
room9 = {name: 'Hall'},
room10 = {name: 'Spa'},
room11 = {name: 'Living Room'},
room12 = {name: 'Observatory'},
room13 = {name: 'Theater'},
room14 = {name: 'Guest House'},
room15 = {name: 'Patio'}
];
//console.log(roomsArray)
// Weapons Array

const weaponsArray = [
  iweapon1 ={name: 'rope', weight: 10},
  iweapon2 ={name: 'knife' , weight: 8},
  iweapon3={name: 'candlestick', weight: 2},
  iweapon4 = {name: 'dumbbell' , weight: 30},
  iweapon5 = {name: 'poison' , weight: 2 },
  iweapon6 = { name: 'axe' , weight: 15},
  iweapon7 ={name: 'bat' , weight: 13 },
  iweapon8={ name: 'bat' , weight: 13},
  iweapon9 = {name: 'trophy' , weight: 25},
  iweapon10 ={name: 'pistol' , weight: 20}
];
//console.log(weaponsArray)

// ITERATION 2

function selectRandom(randomThis) {

  const randomCard = 
  randomThis[Math.floor(Math.random() * randomThis.length)];

  //console.log(randomCard)
  return randomCard
}
// selectRandom(suspectsArray,roomsArray,weaponsArray);

function pickMystery(suspect,room,weapon) {

const randomSuspect = selectRandom(suspect);
const randomRoom = selectRandom(room);
const randomWeapon = selectRandom(weapon);


return {randomSuspect, randomRoom, randomWeapon}
}
 // pickMystery(suspectsArray,roomsArray,weaponsArray);
//suspectsArray,roomsArray,weaponsArray


// ITERATION 3

function revealMystery() {

  const info = pickMystery(suspectsArray,roomsArray,weaponsArray);


  console.log(`${info.randomSuspect.firstName} ${info.randomSuspect.lastName} killed Mr.Boddy using the ${info.randomWeapon.name} in the ${info.randomRoom.name}!!`)
 
}
revealMystery();


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
