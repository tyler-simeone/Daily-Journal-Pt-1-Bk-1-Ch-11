import API from "./data.js"
import HTML from "./entryComponent.js"
import DOM from "./entriesDOM.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

API.getJournalEntries().then(parsedResp => {
    parsedResp.forEach(entry => {
        const entryAsHTML = HTML.makeJournalEntryComponent(entry);
        DOM.renderJournalEntries(entryAsHTML);
    })
});


// NEED TO FIGURE OUT WHERE TO PUT ALL THIS CODE... ONLY SHOULD BE 
// CALLING THE INITIATER OF THIS SEQUENCE IN THIS FILE.
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

// Posting user input to DOM...

const btn = document.querySelector("#save-entry");
btn.addEventListener("click", )

const date = document.querySelector("#journalDate").value;
const concepts = document.querySelector("#journalConcepts").value;
const entry = document.querySelector("#journalEntry").value;
const mood = document.querySelector("#journalMood").value;

if (date || concepts || entry || mood === null || "") {
    window.prompt("Please enter a value");
}

const createEntry = (id, date, concepts, entry, mood) => {
    return {
        "id": id,
        "date": date,
        "concepts": concepts,
        "entry": entry,
        "mood": mood
    }
}

const newJournalEntry = createEntry(date, concepts, entry, mood);

export default newJournalEntry