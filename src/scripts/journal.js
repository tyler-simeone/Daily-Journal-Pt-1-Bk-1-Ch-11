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
// ... Almost there.. the callback fn is repopulating the user interface to be edited, and the updated
// entry is replacing the original, BUT... It's also appending a new object to the DB.. I KNOW WHY!
// ... The save btn is running both the editJournalEntry method as well as the saveJournalEntry...
// It can't differentiate with current code. This is where that hidden text input comes in.. 
// That hidden input will have a value if in edit mode (thanks to DOM.journalEntriesEdit)..
// But if posting a new entry that DOM method won't be invoked so hidden input will have no value,
// That's how you differentiate!
containerEl.addEventListener("click", event => {
    if (event.target.id.startsWith("editBtn")) {
        // Holds the same ID as the whole section container.. 
        const toEdit = event.target.id.split("--")[1]

        // Repopulate user interface to edit the section
        // ... So if I click edit btn, the interface is repopulated,
        // but when pg is refreshed, the data from that entry is still
        // being emptied from the DB
        API.getJournalEntry(toEdit)
            .then(resp => DOM.journalEntriesEdit(resp))

        const hiddenInp = document.querySelector("#entryId")

        if (hiddenInp.value !== "") {
            const saveBtn = document.querySelector("#save-entry")
            saveBtn.addEventListener("click", () => {
                API.editJournalEntry(toEdit)
        })
        } else {
            // Just need to figure out which obj to pass in to save to DB. 
            API.saveJournalEntry()
        }

        
    }
})