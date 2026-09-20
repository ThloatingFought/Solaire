const theories = [
    {
        "title": "Solaire is the Lost Firstborn Son of Gwyn (The Sun God Theory)",
        "content": "Solaire is secretly the nameless firstborn son of Lord Gwyn, the disgraced God of War, who was erased from history.",
        "why": [
            "Solaire is obsessed with finding \"his very own sun.\"",
            "He worships the Lord of Sunlight, the same title associated with Gwyn.",
            "His armor bears a hand-painted sun symbol.",
            "Gwyn's firstborn was stripped of his status and had his name removed from history, creating a mysterious gap that fans connected to Solaire."
        ]
    },
    {
        "title": "The Sunlight Maggot Was His \"True Sun\" All Along",
        "content": "Solaire's quest was always destined to end with him finding the Sunlight Maggot in Lost Izalith — the \"sun\" he was unknowingly searching for.",
        "why": [
            "Solaire repeatedly says he wants to find \"his own sun.\"",
            "In Lost Izalith, he discovers a creature that literally emits a powerful light.",
            "After wearing the maggot, Solaire believes he has finally found what he was searching for and loses himself."
        ]
    },
    {
        "title": "Solaire's \"Happy Ending\" Is Becoming the Sun",
        "content": "If the player saves Solaire, his journey ends with him fulfilling his dream by linking the First Flame in his own world and literally becoming his own sun.",
        "why": [
            "If saved, Solaire can fight alongside the player against Gwyn.",
            "Miyazaki has described this path as Solaire's happiest ending, where he links the flame in his own world.",
            "His entire identity revolves around finding a personal source of light, warmth, and purpose."
        ]
    },
]

const theoryContainer = document.querySelector(".theory-container")

function createElement(type, classList, content) {
    const newElem = document.createElement(type)
    classList.forEach(e => {
        newElem.classList.add(e)
    });
    newElem.textContent = content
    return newElem
}

function showTheory(theoryIndex) {
    theoryContainer.innerHTML = ""
    const title = createElement("h3", ["theory-title"], theories[theoryIndex]["title"])
    theoryContainer.appendChild(title)
    theoryContainer.appendChild(createElement("p", ["theory-p", "theory-text"], theories[theoryIndex]["content"]))
    theoryContainer.appendChild(createElement("h3", ["theories-heading", "theory-text"], "Why fans blieved it:"))
    const list = createElement("ul", ["theory-list"], "")
    theories[theoryIndex]["why"].forEach(e => list.appendChild(createElement("li", ["theory-list-item", "theory-text"], e)))
    theoryContainer.appendChild(list)
}

function getClickHandler(theoryIndex) {
    return function () {
        showTheory(theoryIndex)
    }
}

const controlContainer = document.querySelector(".theory-control")

for (let i = 0; i < controlContainer.children.length; i++) {
    const clickHandler = getClickHandler(i)
    controlContainer.children[i].addEventListener("click", () => clickHandler())
}

showTheory(0)