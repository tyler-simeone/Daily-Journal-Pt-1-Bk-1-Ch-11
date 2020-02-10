import API from "./api.js"
import {FACTORY, HTML} from "./factory.js"
import {DOM, containerEl} from "./dom.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

// DISPLAY ALL
// API.getJournalEntries().then(r => {
//     r.forEach(entry => {
//         const entryAsHtml = HTML.makeJournalEntryComponent(entry)
//         DOM.renderJournalEntries(entryAsHtml)
//     })
// })

API.getJournalEntries().then(resp => {
    DOM.renderJournalEntries(resp)
})

// POST req
const btn = document.querySelector("#save-entry");
btn.addEventListener("click", () => API.saveJournalEntry(FACTORY.createEntry()))

// Filtering data
const moods = document.getElementsByName("moods")
// Adds click event listener to each btn in nodeList
moods.forEach(el => {
    el.addEventListener("click", event => {
        const mood = event.target.value

        // Gets all journal entries and filters for only the ones whose mood property matches mood value 
        // of clicked btn, then clears container and adds each new obj to DOM
        API.getJournalEntries().then(resp => resp.filter(entry => {
            if (entry.mood === mood) {
                containerEl.innerHTML = "";

                API.getJournalEntry(entry.id) 
                    .then(resp => {
                        DOM.renderSingleEntry(resp)
                    })               
            }
        }))
    })
})

// DELETE req
containerEl.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteBtn--")) {
        // This delete btn's ID matches the whole container section's ID
        const entryToDelete = event.target.id.split("--")[1]

        // Deletes entry matching passed-in ID, then gets all remaining entries and adds them back to DOM
        API.rmJournalEntry(entryToDelete)
            .then(API.getJournalEntries)
            .then(resp => {
                containerEl.innerHTML = ""
                
                resp.forEach(entry => {
                    DOM.renderSingleEntry(entry)
                })
            })
    }
})

// EDIT req
containerEl.addEventListener("click", event => {
    if (event.target.id.startsWith("editBtn")) {
        // Holds the same ID as the whole section container.. 
        const toEdit = event.target.id.split("--")[1]

        // Need to repopulate user interface to edit the section...
        // .. So it's working, but when interface is repopulated the 
        // entry is removed from the container..
        API.getJournalEntry(toEdit)
            .then(resp => DOM.journalEntriesEdit(resp))
            .then(API.getJournalEntries)

        API.editJournalEntry(toEdit)
    }
})