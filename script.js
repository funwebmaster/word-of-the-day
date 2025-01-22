// Array of obscure words with definitions
const words = [
    { word: "Apricity", definition: "The warmth of the sun in winter." },
    { word: "Petrichor", definition: "The pleasant, earthy smell after rain." },
    { word: "Serendipity", definition: "The occurrence of events by chance in a happy or beneficial way." },
    { word: "Defenestration", definition: "The act of throwing someone out of a window." },
    { word: "Vellichor", definition: "The strange wistfulness of used bookstores." },
    { word: "Quixotic", definition: "Extremely idealistic; unrealistic and impractical." },
    { word: "Coddiwomple", definition: "To travel in a purposeful manner towards a vague destination." },
    { word: "Ephemeral", definition: "Lasting for a very short time." },
    { word: "Kerfuffle", definition: "A commotion or fuss, especially one caused by conflicting views." },
    { word: "Limerence", definition: "The state of being infatuated with another person." },
    { word: "Sonorous", definition: "A sound that is deep, rich, and resonant." },
    { word: "Gobbledygook", definition: "Language that is meaningless or hard to understand; jargon." },
    { word: "Mellifluous", definition: "A sound that is sweet and pleasant to hear." },
    { word: "Ethereal", definition: "Extremely delicate and light in a way that seems not of this world." },
    { word: "Susurrus", definition: "A soft, whispering, or rustling sound." },
    { word: "Clinomania", definition: "An obsessive desire to stay in bed." },
    { word: "Palimpsest", definition: "Something reused or altered but still bearing visible traces of its earlier form." },
    { word: "Logophile", definition: "A lover of words." },
    { word: "Hiraeth", definition: "A deep longing for something, especially one's home." },
    { word: "Epiphany", definition: "A sudden realization or moment of insight." }
];

// Get references to the HTML elements
const wordTitle = document.getElementById("word-title");
const wordDefinition = document.getElementById("word-definition");
const revealButton = document.getElementById("reveal-word-button");

// Function to reveal a random word
function revealWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    wordTitle.textContent = `Word: ${selectedWord.word}`;
    wordDefinition.textContent = `Definition: ${selectedWord.definition}`;
    revealButton.textContent = "Show Another Word";
}

// Add event listener to the button
revealButton.addEventListener("click", revealWord);
