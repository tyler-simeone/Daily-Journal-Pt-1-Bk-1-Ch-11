import { HTML } from "./factory.js";

const containerEl = document.querySelector(".entryLog");

const DOM = {
    // Only used to fetch GET(ing) all data
    renderJournalEntries(entries) {
        containerEl.innerHTML = ""

        for (const entry of entries) {
           const htmlCard = HTML.makeJournalEntryComponent(entry)
           containerEl.innerHTML += htmlCard;
        }
    },
    renderSingleEntry(entry) {
        const htmlCard = HTML.makeJournalEntryComponent(entry)
        containerEl.innerHTML += htmlCard;        
    },
    // Accesses all form input elements and then adds properties of passed-in obj to them
    // This runs when edit btn is clicked.
    journalEntriesEdit(obj) {
        const hiddenID = document.querySelector("#recipeId")
        const date = document.querySelector("#journalDate")
        const concepts = document.querySelector("#journalConcepts")
        const entry = document.querySelector("#journalEntry")
        const mood = document.querySelector("#journalMood")

        hiddenID.value = ""
        date.value = ""
        concepts.value = ""
        entry.innerHTML = ""
        mood.value = ""

        hiddenID.value = obj.id
        date.value = obj.date
        concepts.value = obj.concepts
        entry.innerHTML = obj.entry
        mood.value = obj.mood
    }
} 

export {DOM, containerEl}