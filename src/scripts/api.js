import {FACTORY, HTML} from "./factory.js"
import {DOM, containerEl} from "./dom.js"

/* 
    This is strictly 'Helper' code. It is not this file's 
    responsibility to execute the code.
*/

// Controls DB connections to my web page
const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },
    getJournalEntry(id) {
        return fetch(`http://localhost:8088/entries/${id}`)
            .then(resp => resp.json())
            
    },
    saveJournalEntry (obj) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(r=>r.json())
    },
    rmJournalEntry(entryId) {
        return fetch(`http://localhost:8088/entries/${entryId}`, {
            method: "DELETE"  
        }).then(resp => resp.json())
    },
    // This method gets the updated values in the user interface, saves to a new
    // obj, then fetches DB obj via passed-in ID and replaces it with updated vals
    // from our new obj .... we want this to happen when 'record entry' btn clicked
    editJournalEntry(entryId) {   
        // So i believe FACTORY.createEntry() already does this. Check later. Can clean this up if so.
        const updatedObj = {
            date: document.querySelector("#journalDate").value,
            concepts: document.querySelector("#journalConcepts").value,
            entry: document.querySelector("#journalEntry").value,
            mood: document.querySelector("#journalMood").value
        }

        return fetch(`http://localhost:8088/entries/${entryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObj)
        })
            .then(resp => resp.json())
    }
}

export default API  