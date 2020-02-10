// import { HTML } from "./entryComponent";

const containerEl = document.querySelector(".entryLog");

const DOM = {
    renderJournalEntries(jsonData) {
        containerEl.innerHTML += jsonData;
    },
    // Accesses all form input elements and then adds properties of passed-in obj to them
    // This runs when edit btn is clicked.
    journalEntriesEdit(obj) {
        const hiddenID = document.querySelector("#recipeId")
        const date = document.querySelector("#journalDate")
        const concepts = document.querySelector("#journalConcepts")
        const entry = document.querySelector("#journalEntry")
        const mood = document.querySelector("#journalMood")

        hiddenID.value = obj.id
        date.value = obj.date
        concepts.value = obj.concepts
        entry.innerHTML = obj.entry
        mood.value = obj.mood
    }
} 

// Better (DRY) way to render to the DOM.. 
// TODO: But will need to test & refactor a bunch of my code.

// const DOM = {
//     renderJournalEntries(entries) {
//         containerEl.innerHTML = ""

//         for (const entry of entries) {
//             const htmlCard = HTML.makeJournalEntryComponent(entry)
//             containerEl.innerHTML += htmlCard
//         }
//     }
// } 

export {DOM, containerEl}