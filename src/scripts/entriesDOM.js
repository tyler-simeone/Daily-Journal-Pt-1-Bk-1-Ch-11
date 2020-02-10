// import { HTML } from "./entryComponent";

const containerEl = document.querySelector(".entryLog");

const DOM = {
    renderJournalEntries(jsonData) {
        containerEl.innerHTML += jsonData;
    },
    journalEntriesEdit() {
        const hiddenID = document.querySelector("#recipeId").value
        const date = document.querySelector("#journalDate").value
        const concepts = document.querySelector("#journalConcepts").value
        const entry = document.querySelector("#journalEntry").value
        const mood = document.querySelector("#journalMood").value

        
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