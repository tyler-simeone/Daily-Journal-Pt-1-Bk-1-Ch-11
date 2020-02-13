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

// Right now iterating through DB, but I think i need to go one deeper
// & iterate through each object using a 'for of' for the matching input
searchBar.addEventListener("keypress", event => {
    event.preventDefault()
    if (event.charCode === 13) {
        const searchVal = document.getElementById("searchBar").value

        API.getJournalEntries()
            .then(resp => {
                resp.forEach(entryObj => {
                    // Holds array of values/properties in the DB obj
                    const objVals = Object.values(entryObj)
                    // console.log(objVals)
                    // Looping through arr of DB obj values
                    for (const val of objVals) {
                        console.log(val)
                        
                        // So it's returning undefined to the container, so I think this conditional
                        // is working. But maybe need to stringify 'val' first.... If not ask for help
                        if (typeof val === "string" && val.includes(searchVal)) {
                            // containerEl.innerHTML = ""
                            containerEl.innerHTML = DOM.renderSingleEntry(entryObj)
                        }
                    }
                })
            })
    }
})


// TODO: Coding challenge 1: change save btn to update journal entry when in edit mode and change back 
// to record journal entry after update has been sent, 2: when delete btn clicked display alert