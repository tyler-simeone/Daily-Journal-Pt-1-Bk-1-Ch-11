import API from "./data.js"
import {FACTORY, HTML} from "./entryComponent.js"
import {DOM, containerEl} from "./entriesDOM.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

// DISPLAY ALL
API.getJournalEntries().then(r => {
    r.forEach(entry => {
        const entryAsHtml = HTML.makeJournalEntryComponent(entry)
        DOM.renderJournalEntries(entryAsHtml)
    })
})

// POST req
const btn = document.querySelector("#save-entry");
btn.addEventListener("click", () => API.saveJournalEntry(FACTORY.createEntry()))

// Filtering data
const moods = document.getElementsByName("moods")

moods.forEach(el => {
    el.addEventListener("click", event => {
        const mood = event.target.value

        API.getJournalEntries().then(resp => resp.filter(entry => {
            if (entry.mood === mood) {
                containerEl.innerHTML = "";
                API.getSomeJournalEntries(entry.id)                
            }
        }))
    })
})

// DELETE req
containerEl.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteBtn--")) {
        const entryToDelete = event.target.id.split("--")[1]

        API.rmJournalEntry(entryToDelete)
            .then(API.getJournalEntries)
            .then(resp => {
                containerEl.innerHTML = ""
                
                resp.forEach(entry => {
                    const entryAsHtml = HTML.makeJournalEntryComponent(entry)
                    DOM.renderJournalEntries(entryAsHtml)
                })
            })
    }
})

// EDIT req
containerEl.addEventListener("click", event => {
    if (event.target.id.startsWith("editBtn")) {
        const toEdit = event.target.id.split("--")[1]

        API.editJournalEntry(toEdit)
    }
})