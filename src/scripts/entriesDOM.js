// import { HTML } from "./entryComponent";

const containerEl = document.querySelector(".entryLog");

const DOM = {
    renderJournalEntries(jsonData) {
        containerEl.innerHTML += jsonData;
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