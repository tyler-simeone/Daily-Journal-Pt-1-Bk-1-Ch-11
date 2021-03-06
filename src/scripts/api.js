import { FACTORY } from "./factory.js"

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
        const updatedObj = FACTORY.createEntry()

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