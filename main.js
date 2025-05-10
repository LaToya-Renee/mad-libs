// Sentence Structure Component Arrays
const nouns = ['cat', 'dog', 'monster', 'princess', 'pirate', 'elf', 'reindeer', 'castle', 'zoo', 'box', 'skirt', 'minivan', 'microphone', 'jar of dirt', 'blanket'];
const verbs = ['jump', 'fly', 'swim', 'play', 'sleep', 'dance', 'sing', 'ride', 'slide', 'climb', 'poke', 'yodel', 'throw', 'cuddle', 'gather'];
const adverbs = ['quickly', 'joyfully', 'secretly', 'powerfully', 'foolishly', 'innocently', 'kindly', 'devotedly', 'fashionably', 'boastfully', 'hopelessly', 'occasionally', 'gradually', 'hastily', 'audibly'];
const adjectives = ['happy', 'sad', 'angry', 'crazy', 'afraid', 'excited', 'strong', 'smart', 'pretty', 'fluffy', 'goofy', 'giddy', 'hungry', 'nervous', 'devious'];

//universal function that will choose a random index for any array
const randomItem = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr.splice(randomIndex, 1)[0];
};

//Stories
    //test story
const testStory = `The ${randomItem(adjectives)} ${randomItem(nouns)} ${randomItem(verbs)}s the ${randomItem(adjectives)} ${randomItem(nouns)} ${randomItem(adverbs)}!`;
    //story #1
const storyOne = `One sunny ${randomItem(adjectives)} morning, my friends and I decided to take a leap into adventure. We packed our bags with ${randomItem(nouns)}s and hopped into our ${randomItem(adjectives)} car. With no map and just a hint of ${randomItem(nouns)} in the air, we drove towards the mysterious ${randomItem(nouns)}. ${randomItem(adverbs)}, we spotted a group of ${randomItem(nouns)}s dancing on the side of the road! My ${randomItem(nouns)} suggested we join them, and soon we found ourselves in an sudden dance-off. As the sun began to set, we realized that this ${randomItem(adjectives)} adventure brought us closer than ever, filling out hearts with ${randomItem(adjectives)} memories and ${randomItem(nouns)}s.`;


//logs chosen story to console
console.log(storyOne);