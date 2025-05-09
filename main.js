// Sentence Structure Component Arrays
const nouns = ['cat', 'dog', 'monster', 'princess', 'pirate', 'elf', 'reindeer', 'castle', 'zoo', 'box', 'skirt', 'minivan', 'microphone', 'jar of dirt', 'blanket'];
const verbs = ['jump', 'fly', 'swim', 'play', 'sleep', 'dance', 'sing', 'ride', 'slide', 'climb', 'poke', 'yodel', 'throw', 'cuddle', 'gather'];
const adverbs = ['quickly', 'joyfully', 'secretly', 'powerfully', 'foolishly', 'innocently', 'kindly', 'devotedly', 'fashionably', 'boastfully', 'hopelessly', 'occasionally', 'gradually', 'hastily', 'audibly'];
const adjectives = ['happy', 'sad', 'angry', 'crazy', 'afraid', 'excited', 'strong', 'smart', 'pretty', 'fluffy', 'goofy', 'giddy', 'hungry', 'nervous', 'devious'];

// Test String and Stories
const testString = '';
const storyOne = '';

//RANDOMIZING FUNCTIONS

//universal function that will choose a random index for any array
const randomItem = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

//functions that will choose sentence structure components at random
const randomNoun = randomItem(nouns);
const randomVerb = randomItem(verbs);
const randomAdverb = randomItem(adverbs);
const randomAdjective = randomItem(adjectives);