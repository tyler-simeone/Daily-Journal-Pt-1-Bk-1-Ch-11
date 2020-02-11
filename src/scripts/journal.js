import API from "./api.js"
import {FACTORY, HTML} from "./factory.js"
import {DOM, containerEl} from "./dom.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    TODO: (Refactor main once all reqs have been met to simplify and clean up)
*/

// DISPLAY ALL
API.getJournalEntries().then(resp => {
    DOM.renderJournalEntries(resp)
})

// POST req to work with edit btn click
const btn = document.querySelector("#save-entry");
const hiddenEntry = document.querySelector("#entryId");
const saveButtonClick = (postToEdit) => {
    btn.addEventListener("click", () => {
        if (hiddenEntry.value !== "") {
            API.editJournalEntry(postToEdit)
        } else {
            API.saveJournalEntry(FACTORY.createEntry())
        }
    })
}
saveButtonClick();

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

        // Repopulate user interface to edit the section
        API.getJournalEntry(toEdit)
            .then(resp => DOM.journalEntriesEdit(resp))

        // Attempt #3 -- this worked! Needed to run POST req in main, and PUT req
        // in this EL, while differentiating between POST & PUT.. Only way to do this
        // was to make a func in global namespace with the conditionals there, then 
        // call that function here when in edit mode.... BOOM!
        saveButtonClick(toEdit);
    }
})

// Search bar
const searchBar = document.getElementById("searchBar")
const searchVal = searchBar.value

searchBar.addEventListener("keypress", event => {
    if (event.charCode === 13) {
        API.getJournalEntries()
            .then(resp => {
                resp.filter(entry => {
                    if (entry.contains(searchVal)) {
                        containerEl.innerHTML = entry
                    }
                })
            })
    }
})