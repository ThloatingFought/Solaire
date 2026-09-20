const quoteHolder = document.querySelector(".about-quote-quote")

const quotes = [
    "Praise the Sun!",
    "If only I could be so grossly incandescent!",
    "The sun is a wondrous body. Like a magnificent father!",
    "My goal is to find my very own sun."
]

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

quoteHolder.textContent = getRandomQuote()

setInterval(() => {
    let newQuote = getRandomQuote()
    while (newQuote == quoteHolder.textContent) {
        newQuote = getRandomQuote()
    }
    quoteHolder.textContent = newQuote
}, 60000);